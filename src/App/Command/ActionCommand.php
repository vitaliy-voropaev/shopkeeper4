<?php

namespace App\Command;

use App\Controller\Admin\ProductController;
use App\MainBundle\Document\Category;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Style\SymfonyStyle;

class ActionCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('app:action')
            ->setDescription('Application actions commands.')
            ->setHelp('Available actions: filters_update')
            ->addArgument('action', InputArgument::REQUIRED, 'Action name.')
            ->addArgument('option', InputArgument::OPTIONAL, 'Action option.');
    }

    /**
     * @param InputInterface $input
     * @param OutputInterface $output
     * @return void
     * @throws \Doctrine\ODM\MongoDB\LockException
     * @throws \Doctrine\ODM\MongoDB\Mapping\MappingException
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);
        $time_start = microtime(true);

        $action = $input->getArgument('action');
        $option = $input->getArgument('option');

        switch ($action) {
            case 'filters_update':

                $count = 0;

                $productController = new ProductController();
                $productController->setContainer($this->getContainer());

                /** @var \App\Repository\CategoryRepository $categoryRepository */
                $categoryRepository = $this->getContainer()->get('doctrine_mongodb')
                    ->getManager()
                    ->getRepository(Category::class);

                $categories = $categoryRepository->findAll();
                foreach ($categories as $category) {
                    $productController->updateFiltersData($category);
                    $count++;
                }

                $io->success('Updated filters for categories: ' . $count);

                break;
        }

        $time_end = microtime(true);
        $time = round($time_end - $time_start, 3);

        $io->note("The operation has been processed in time {$time} sec.");
    }
}

