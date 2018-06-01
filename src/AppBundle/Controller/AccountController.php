<?php

namespace AppBundle\Controller;

use AppBundle\Document\Order;
use AppBundle\Document\User;

use AppBundle\Repository\UserRepository;
use AppBundle\Service\UtilsService;
use MongoDB\Driver\Exception\AuthenticationException;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\FormError;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\AdvancedUserInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\Translation\TranslatorInterface;

use AppBundle\Form\Model\ChangePassword;
use AppBundle\Form\Type\ChangePasswordType;
use AppBundle\Form\Type\RegistrationType;
use AppBundle\Form\Model\Registration;
use AppBundle\Form\Model\ResetPassword;
use AppBundle\Form\Type\ResetPasswordType;
use AppBundle\Form\Type\UserType;

class AccountController extends Controller
{

    /**
     * @Route("/login", name="login")
     * @param Request $request
     * @return Response
     */
    public function loginAction(Request $request)
    {
        $user = $this->getUser();
        if ($user instanceof AdvancedUserInterface) {
            return $this->redirectToRoute('homepage');
        }

        /** @var AuthenticationException $exception */
        $exception = $this->get('security.authentication_utils')
            ->getLastAuthenticationError();

        return $this->render('security/login.html.twig', [
            'last_username' => '',
            'error' => $exception ? $exception->getMessage() : null
        ]);
    }

    /**
     * @Route("/register", name="register")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @param TranslatorInterface $translator
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function registerAction(
        Request $request,
        UserPasswordEncoderInterface $encoder,
        TranslatorInterface $translator
    )
    {
        $dm = $this->get('doctrine_mongodb')->getManager();
        $form = $this->createForm(RegistrationType::class, new Registration());

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $registration = $form->getData();
            /** @var User $user */
            $user = $registration->getUser();

            // User existence check
            $email = $user->getEmail();
            $usersCount = $this->getUserRepository()->getUsersCountBy('email', $email);
            if ($usersCount > 0) {
                $form->addError(new FormError($translator->trans('register.email.already exists', [], 'validators')));
            }

            if ($form->isValid()) {
                $plainPassword = $user->getPassword();
                $encodedPassword = $encoder->encodePassword($user, $plainPassword);

                $user
                    ->setRoles(['ROLE_USER'])
                    ->setPassword($encodedPassword);

                $dm->persist($user);
                $dm->flush();

                $request->getSession()
                    ->getFlashBag()
                    ->add('messages', 'You are successfully registered. Now you can enter.');

                return $this->redirectToRoute('login');
            }
        }

        return $this->render('security/register.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/password_reset", name="password_reset")
     * @param Request $request
     * @param TranslatorInterface $translator
     * @param UtilsService $utilsService
     * @return Response
     */
    public function passwordResetAction(Request $request, TranslatorInterface $translator, UtilsService $utilsService)
    {
        $dm = $this->get('doctrine_mongodb')->getManager();
        $form = $this->createForm(ResetPasswordType::class, new ResetPassword());
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $email = $form->get('email')->getData();
            $newPassword = $form->get('password')->getData();

            /** @var User $user */
            $user = $this->getUserRepository()->findOneBy([
                'email' => $email
            ]);
            if (!$user) {
                $form->addError(new FormError($translator->trans('password_reset.user.not_found', [], 'validators')));
            }
            else {

                $confirmCode = UtilsService::generatePassword();
                $user
                    ->setNewPassword($newPassword)
                    ->setSecretCode($confirmCode);

                $dm->flush();

                $siteURL = ($request->server->get('HTTPS') ? 'https' : 'http')
                    . "://{$request->server->get('HTTP_HOST')}/";

                $emailBody = $this->renderView('email/email_password_reset.html.twig', array(
                    'newPassword' => $newPassword,
                    'email' => $email,
                    'siteUrl' => $siteURL,
                    'confirmCode' => $confirmCode
                ));

                $utilsService->sendMail('Reset password', $emailBody, $email);

                $request->getSession()
                    ->getFlashBag()
                    ->add('messages', 'An email with further instructions has been sent to your email address.');
            }
        }

        return $this->render('security/password_reset.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/password_confirm/{email}/{code}", name="password_confirm")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @param $email
     * @param $code
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|Response
     */
    public function passwordConfirmAction(
        Request $request,
        UserPasswordEncoderInterface $encoder,
        $email,
        $code
    )
    {
        $dm = $this->get('doctrine_mongodb')->getManager();
        $userRepository = $this->getUserRepository();
        /** @var User $user */
        $user = $userRepository->findOneBy([
            'email' => $email,
            'secretCode' => $code
        ]);
        if ($user) {

            $newPassword = $user->getNewPassword();
            if ($newPassword) {
                $encodedPassword = $encoder->encodePassword($user, $newPassword);
                $user
                    ->setPassword($encodedPassword)
                    ->setNewPassword(null)
                    ->setSecretCode(null);
                $dm->flush();
            }

            $request->getSession()
                ->getFlashBag()
                ->add('messages', 'Your password has been changed successfully. Now you can enter.');

            return $this->redirectToRoute('login');
        }

        return new Response('');
    }

    /**
     * @Route("/profile/", name="profile")
     * @return Response
     */
    public function profileAction()
    {
        return $this->redirectToRoute('profile_history_orders');
    }

    /**
     * @Route("/profile/change_password", name="profile_change_password")
     * @param Request $request
     * @param UserPasswordEncoderInterface $encoder
     * @return RedirectResponse|Response
     */
    public function profileChangePasswordAction(Request $request, UserPasswordEncoderInterface $encoder)
    {
        if (!$this->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('login');
        }
        /** @var User $user */
        $user = $this->getUser();
        $dm = $this->get('doctrine_mongodb')->getManager();

        $form = $this->createForm(ChangePasswordType::class, new ChangePassword());
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $model = $form->getData();
            $encodedPassword = $encoder->encodePassword($user, $model->getPassword());

            $user
                ->setPassword($encodedPassword)
                ->setNewPassword(null)
                ->setSecretCode(null);
            $dm->flush();

            $request->getSession()
                ->getFlashBag()
                ->add('messages', 'Your password has been changed successfully.');

            return $this->redirectToRoute('profile_change_password');
        }

        return $this->render('profile/change_password.html.twig', [
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route(
     *     "/profile/history_orders/{page}/{orderId}",
     *     name="profile_history_orders",
     *     requirements={"page", "orderId"},
     *     defaults={"page": 1, "orderId": 0}
     * )
     * @param Request $request
     * @param $page
     * @param $orderId
     * @return RedirectResponse|Response
     */
    public function historyOrdersAction(Request $request, $page, $orderId)
    {
        if (!$this->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('login');
        }
        /** @var User $user */
        $user = $this->getUser();

        $query = $this->get('doctrine_mongodb')
            ->getManager()
            ->createQueryBuilder(Order::class);

        $total = $query
            ->field('userId')->equals($user->getId())
            ->getQuery()
            ->execute()
            ->count();

        $pageLimit = 10;

        $pagesOptions = UtilsService::getPagesOptions([
            'page' => $page,
            'limit' => $pageLimit
        ], $total);

        $orders = $query
            ->field('userId')->equals($user->getId())
            ->sort('createdDate', 'desc')
            ->skip($pagesOptions['skip'])
            ->limit($pagesOptions['limit'])
            ->getQuery()
            ->execute();

        return $this->render('profile/history_orders.html.twig', [
            'orders' => $orders,
            'pagesOptions' => $pagesOptions,
            'currentOrderId' => $orderId
        ]);
    }

    /**
     * @Route("/profile/profile_contacts", name="profile_contacts")
     * @param Request $request
     * @return Response
     */
    public function contactsAction(Request $request)
    {
        if (!$this->isGranted('ROLE_USER')) {
            return $this->redirectToRoute('login');
        }
        /** @var User $user */
        $user = $this->getUser();



        return $this->render('profile/contacts.html.twig', [

        ]);
    }

    /**
     * @return UserRepository
     */
    public function getUserRepository()
    {
        return $this->get('doctrine_mongodb')
            ->getManager()
            ->getRepository(User::class);
    }

}
