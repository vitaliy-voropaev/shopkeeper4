import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import * as _ from 'lodash';
import {TranslateService} from '@ngx-translate/core';

import {ContentType} from './models/content_type.model';
import {Category} from './models/category.model';
import {ModalContentAbstractComponent} from '../modal.abstract';
import {SystemNameService} from '../services/system-name.service';
import {Product} from './models/product.model';

import {CategoriesService} from './services/categories.service';
import {ContentTypesService} from './services/content_types.service';
import {ProductsService} from './services/products.service';
import {FilesService} from './services/files.service';
import {ContentField, FieldIndexData} from './models/content_field.model';

@Component({
    selector: 'app-product-modal-content',
    templateUrl: 'templates/modal-product.html'
})
export class ProductModalContentComponent extends ModalContentAbstractComponent<Product> implements OnInit {

    @Input() category: Category;
    categories: Category[] = [];
    contentTypes: ContentType[] = [];
    currentContentType: ContentType = new ContentType(0, '', '', '', '', [], [], true);
    model = {} as Product;
    timer: any;

    formFields = {
        parentId: {
            value: 0,
            validators: [Validators.required],
            messages: {
                required: 'Category is required.'
            }
        },
        isActive: {
            value: true,
            validators: [],
            messages: {}
        }
    };

    constructor(
        public fb: FormBuilder,
        public dataService: ProductsService,
        public systemNameService: SystemNameService,
        public activeModal: NgbActiveModal,
        public tooltipConfig: NgbTooltipConfig,
        public translateService: TranslateService,
        private contentTypesService: ContentTypesService,
        private categoriesService: CategoriesService,
        private filesService: FilesService
    ) {
        super(fb, dataService, systemNameService, activeModal, tooltipConfig, translateService);

        this.model.id = 0;
        this.model.parentId = 0;
    }

    ngOnInit(): void {
        this.model.parentId = this.category.id;
        this.dataService.setRequestUrl('products/' + this.category.id);

        this.buildForm();
        this.getCategories();
        this.getContentType()
            .then((data) => {
                if (this.itemId) {
                    return this.getModelData();
                } else {
                    return Promise.reject('');
                }
            }, (err) => {
                this.errorMessage = err.error || 'Error.';
                return Promise.reject('');
            })
            .then((data) => {
                this.updateForm();
            });
    }

    getSystemFieldName(): string {
        const index = _.findIndex(this.currentContentType.fields, {inputType: 'system_name'});
        return index > -1 ? this.currentContentType.fields[index].name : 'name';
    }

    getCategories() {
        this.loading = true;
        this.categoriesService.getListPage()
            .subscribe(data => {
                this.categories = data.items;
                this.loading = false;
            }, (err) => {
                this.errorMessage = err.error || 'Error.';
            });
    }

    getContentType(): Promise<ContentType> {
        this.loading = true;
        if (!this.category.contentTypeName) {
            return Promise.reject({error: 'Content type name not found.'});
        }
        return new Promise((resolve, reject) => {
            this.contentTypesService.getItemByName(this.category.contentTypeName)
                .subscribe((data) => {
                    this.currentContentType = data as ContentType;
                    this.errorMessage = '';
                    this.loading = false;
                    resolve(data);
                }, (err) => {
                    this.errorMessage = err.error || 'Error.';
                    this.loading = false;
                    reject(err);
                });
        });
    }

    /**
     * Update form
     * @param data
     */
    updateForm(data ?: any): void {
        if (!data) {
            data = _.clone(this.model);
        }
        const newKeys = _.map(this.currentContentType.fields, function(field) {
            return field.name;
        });
        newKeys.push('id', 'parentId', 'previousParentId', 'isActive');

        Object.keys(this.model).forEach((key) => {
            if (key.indexOf('__') > -1) {
                const fieldBaseName = ContentField.getFieldBaseName(key);
                const fieldIndexData: FieldIndexData = ContentField.getFieldIndexData(this.currentContentType.fields, fieldBaseName);
                if (fieldIndexData.index === -1) {
                    return;
                }
                const newField = _.cloneDeep(this.currentContentType.fields[fieldIndexData.index]);
                newField.name = key;

                this.currentContentType.fields.splice(
                    fieldIndexData.index + fieldIndexData.additFieldsCount + 1,
                    0,
                    newField
                );
                newKeys.push(key);
            }
        });

        // Remove keys
        for (const key in this.form.controls) {
            if (this.form.controls.hasOwnProperty(key)) {
                if (newKeys.indexOf(key) === -1) {
                    this.form.removeControl(key);
                }
            }
        }
        this.model = _.pick(data, newKeys) as Product;
    }

    onChangeContentType(): void {
        const parentId = parseInt(String(this.model.parentId), 10);
        const index = _.findIndex(this.categories, {id: parentId});
        if (index === -1) {
            return;
        }
        if (!this.currentContentType
            || (this.currentContentType.name !== this.categories[index].contentTypeName)) {
                this.model.previousParentId = this.category.id;
                this.category = _.cloneDeep(this.categories[index]);
                this.getContentType();
        }
    }

    saveFiles(itemId: number) {
        if (Object.keys(this.files).length === 0) {
            this.closeModal();
            return;
        }

        const formData: FormData = new FormData();
        for (const key in this.files) {
            if (this.files.hasOwnProperty(key) && this.files[key] instanceof File) {
                formData.append(key, this.files[key], this.files[key].name);
            }
        }
        formData.append('itemId', String(itemId));
        formData.append('ownerType', this.currentContentType.name);
        formData.append('categoryId', String(this.model.parentId));
        formData.append('fieldsSort', this.getFieldsSortData().join(','));

        this.filesService.postFormData(formData)
            .subscribe(() => {
                this.closeModal();
            },
            err => {
                this.errorMessage = err.error || 'Error.';
                this.submitted = false;
                this.loading = false;
            });
    }

    getFormData() {
        const data = _.cloneDeep(this.model);

        // Delete temporary data
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                if (data[key]
                    && typeof data[key] === 'object'
                    && data[key].dataUrl) {
                        delete data[key].dataUrl;
                }
            }
        }

        data['fieldsSort'] = this.getFieldsSortData();
        return data;
    }

    getFieldsSortData(): string[] {
        let sordData = this.currentContentType.fields.map((field) => {
            return field.name;
        });
        sordData = sordData.filter((fieldName) => {
            return !!this.model[fieldName] && fieldName.indexOf('__') > -1;
        });
        return sordData;
    }

    save() {
        this.submitted = true;
        if (!this.form.valid) {
            this.onValueChanged('form');
            this.submitted = false;
            return;
        }

        this.loading = true;
        this.dataService.setRequestUrl('products/' + this.category.id);

        this.saveRequest()
            .subscribe((data) => {
                    if (Object.keys(this.files).length > 0) {
                        this.saveFiles(data._id);
                    } else {
                        this.closeModal();
                    }
                },
                err => {
                    this.errorMessage = err.error || 'Error.';
                    this.submitted = false;
                    this.loading = false;
                });
    }
}
