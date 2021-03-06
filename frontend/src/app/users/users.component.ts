import {Component, OnInit, Input, ViewChild, Injectable, ElementRef} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {NgbModal, NgbActiveModal, NgbModalRef, NgbPopover, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';

import {UserOption, User} from './models/user.model';
import {PageTableAbstractComponent} from '../page-table.abstract';
import {UsersService} from './users.service';
import {SettingsService} from '../settings/settings.service';
import {SystemNameService} from '../services/system-name.service';
import {ModalContentAbstractComponent} from '../modal.abstract';
import {AppSettings} from '../services/app-settings.service';
import {QueryOptions} from '../models/query-options';
import {FormFieldInterface} from '../models/form-field.interface';

@Component({
    selector: 'app-modal-user',
    templateUrl: './templates/modal-user.html',
    providers: []
})
export class ModalUserContentComponent extends ModalContentAbstractComponent<User> {

    model = new User(0, '', '', [], true, []);
    modalTitle = 'User';
    userRoles: {[key: string]: string}[] = [];
    baseUrl: string;
    allowImpersonation = false;

    formFields: FormFieldInterface = {
        fullName: {
            fieldLabel: 'FULL_NAME',
            value: '',
            validators: [Validators.required],
            messages: {}
        },
        email: {
            fieldLabel: 'EMAIL',
            value: '',
            validators: [Validators.required],
            messages: {}
        },
        phone: {
            fieldLabel: 'PHONE',
            value: '',
            validators: [],
            messages: {}
        },
        password: {
            fieldLabel: 'PASSWORD',
            value: '',
            validators: [],
            messages: {}
        },
        confirmPassword: {
            fieldLabel: 'CONFIRM_PASSWORD',
            value: '',
            validators: [],
            messages: {}
        },
        role: {
            fieldLabel: 'ROLE',
            value: '',
            validators: [Validators.required],
            messages: {}
        },
        isActive: {
            fieldLabel: 'ACTIVE',
            value: '',
            validators: [],
            messages: {}
        }
    };

    constructor(
        public fb: FormBuilder,
        public dataService: UsersService,
        public systemNameService: SystemNameService,
        public activeModal: NgbActiveModal,
        public tooltipConfig: NgbTooltipConfig,
        public translateService: TranslateService,
        private modalService: NgbModal,
        private settingsService: SettingsService,
        private appSettings: AppSettings
    ) {
        super(fb, dataService, systemNameService, activeModal, tooltipConfig, translateService);
    }

    onBeforeInit(): void {
        if (!this.isEditMode) {
            this.formFields.password.validators.push(Validators.required);
            this.formFields.confirmPassword.validators.push(Validators.required);
        }
        this.baseUrl = AppSettings.getBaseUrl();
        this.getUserRoles();
    }

    onAfterGetData(): void {
        if (this.isEditMode
            && this.appSettings.isSuperAdmin
            && this.appSettings.settings.userEmail !== this.model.email) {
                this.allowImpersonation = true;
        }
    }

    getUserRoles(): void {
        this.dataService.getRolesList()
            .subscribe((res) => {
                if (res['roles']) {
                    this.userRoles = res['roles'];
                }
            });
    }

    addressFieldsAdd(): void {
        if (!this.model.options) {
            this.model.options = [];
        }
        this.model.options.push(new UserOption('', '', ''));
    }

    addressFieldsDelete(index: number): void {
        this.model.options.splice(index, 1);
    }
}

@Component({
    selector: 'app-shk-users',
    templateUrl: './templates/page-users.html',
    providers: [ UsersService ]
})
export class UsersComponent extends PageTableAbstractComponent<User> {

    title = 'USERS';
    queryOptions: QueryOptions = new QueryOptions('id', 'desc', 1, 10, 0, 0);

    tableFields = [
        {
            name: 'id',
            sortName: 'id',
            title: 'ID',
            outputType: 'text',
            outputProperties: {}
        },
        {
            name: 'email',
            sortName: 'email',
            title: 'EMAIL',
            outputType: 'text',
            outputProperties: {}
        },
        {
            name: 'fullName',
            sortName: 'fullName',
            title: 'FULL_NAME',
            outputType: 'text',
            outputProperties: {}
        },
        {
            name: 'role',
            sortName: 'roles',
            title: 'ROLE',
            outputType: 'userRole',
            outputProperties: {}
        },
        {
            name: 'isActive',
            sortName: 'isActive',
            title: 'STATUS',
            outputType: 'boolean',
            outputProperties: {}
        }
    ];

    constructor(
        public dataService: UsersService,
        public activeModal: NgbActiveModal,
        public modalService: NgbModal,
        public translateService: TranslateService
    ) {
        super(dataService, activeModal, modalService, translateService);
    }

    setModalInputs(itemId?: number, isItemCopy: boolean = false): void {
        const isEditMode = typeof itemId !== 'undefined' && !isItemCopy;
        this.modalRef.componentInstance.modalTitle = itemId ? `User #${itemId}` : this.getLangString('ADD');
        this.modalRef.componentInstance.itemId = itemId || 0;
        this.modalRef.componentInstance.isItemCopy = isItemCopy || false;
        this.modalRef.componentInstance.isEditMode = isEditMode;
    }

    getModalContent() {
        return ModalUserContentComponent;
    }

    changeRequest(e): void {

    }
}
