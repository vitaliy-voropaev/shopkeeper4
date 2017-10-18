import { Component, OnInit, Input, ViewChild, Injectable, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { NgbModal, NgbActiveModal, NgbModalRef, NgbPopover, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import * as _ from "lodash";

import { FieldTypesService } from './field-types.component';
import { ContentField } from './models/content_field.model';
import { ContentType } from './models/content_type.model';
import { FieldType } from "./models/field-type.model";
import { FieldTypeProperty } from './models/field-type-property.model';
import { QueryOptions } from './models/query-options';
import { PageTableAbstractComponent, ModalContentAbstractComponent } from './page-table.abstract';

import { ContentTypesService } from './services/content_types.service';
import { CollectionsService } from './services/collections.service';
import { SystemNameService } from './services/system-name.service';

@Component({
    selector: 'content-type-modal-content',
    templateUrl: 'templates/modal-content_types.html',
    providers: [ ContentTypesService, FieldTypesService, CollectionsService, SystemNameService ]
})
export class ContentTypeModalContent extends ModalContentAbstractComponent {

    @ViewChild('addCollectionBlock') elementAddCollectionBlock;
    @ViewChild('addGroupBlock') elementAddGroupBlock;
    modalRef: NgbModalRef;

    constructor(
        public fb: FormBuilder,
        public dataService: ContentTypesService,
        public systemNameService: SystemNameService,
        public activeModal: NgbActiveModal,
        public tooltipConfig: NgbTooltipConfig,
        private fieldTypesService: FieldTypesService,
        private collectionsService: CollectionsService,
        private modalService: NgbModal
    ) {
        super(fb, dataService, systemNameService, activeModal, tooltipConfig);
    }

    model: ContentType = new ContentType(0, '', '', '', 'products', [], ['Основное','Служебное'], true);
    fieldModel: ContentField = new ContentField(0, '', '', '', '', {}, '', {}, '', false, false, false);
    fld_submitted: boolean = false;
    errorFieldMessage: string;
    action: string = 'add_field';
    currentFieldName = '';
    collections: any[] = ['products'];
    fieldForm: FormGroup;
    fieldTypes: FieldType[];
    fieldTypeProperties: {} = {
        input: [],
        output: []
    };

    formFields = {
        name: {
            value: '',
            validators: [Validators.required, Validators.pattern('[A-Za-z0-9_-]+')],
            messages: {
                required: 'Name is required.',
                pattern: 'The name must contain only Latin letters and numbers.'
            }
        },
        title: {
            value: '',
            validators: [Validators.required],
            messages: {
                required: 'Title is required.'
            }
        },
        description: {
            value: '',
            validators: [],
            messages: {}
        },
        collection: {
            value: '',
            validators: [Validators.required],
            messages: {
                required: 'Title is required.'
            }
        },
        new_collection: {
            value: '',
            validators: [Validators.pattern('[A-Za-z0-9_-]+')],
            messages: {
                pattern: 'The name must contain only Latin letters and numbers.',
                exists: 'Collection with the same name already exists.'
            }
        },
        is_active: {
            value: '',
            validators: [],
            messages: {}
        }
    };

    fieldsFormOptions = {
        title: {
            value: '',
            validators: [Validators.required],
            messages: {
                required: 'Title is required.'
            }
        },
        name: {
            value: '',
            validators: [Validators.required, Validators.pattern('[A-Za-z0-9_-]+')],
            messages: {
                required: 'Name is required.',
                pattern: 'The name must contain only Latin letters.'
            }
        },
        description: {
            value: '',
            validators: [],
            messages: {}
        },
        input_type: {
            value: '',
            validators: [Validators.required],
            messages: {
                required: 'Input type is required.'
            }
        },
        output_type: {
            value: '',
            validators: [Validators.required],
            messages: {
                required: 'Output type is required.'
            }
        },
        group: {
            value: '',
            validators: [Validators.required],
            messages: {
                required: 'Group is required.'
            }
        },
        new_group: {
            value: '',
            validators: [],
            messages: {
                exists: 'Group with the same name already exists.'
            }
        },
        required: {
            value: '',
            validators: [],
            messages: {}
        },
        show_in_table: {
            value: '',
            validators: [],
            messages: {}
        },
        is_filter: {
            value: '',
            validators: [],
            messages: {}
        }
    };

    buildForm(): void {
        ModalContentAbstractComponent.prototype.buildForm.call(this);

        let controls = this.buildControls(this.fieldsFormOptions, 'fieldModel', 'fld_');
        this.fieldForm = this.fb.group(controls);
        this.fieldForm.valueChanges
            .subscribe(() => this.onValueChanged('fieldForm', 'fld_'));
    }

    /** On initialize */
    ngOnInit(): void {
        ModalContentAbstractComponent.prototype.ngOnInit.call(this);
        this.getFieldTypes();
        this.getCollectionsList();
    }

    /** Get field types */
    getFieldTypes(): void {
        let options = new QueryOptions('name', 'asc', 0, 0, 1);
        this.fieldTypesService.getList(options)
            .subscribe(
                preparedData => {
                    this.fieldTypes = preparedData.data;
                },
                error =>  this.errorMessage = <any>error
            );
    }

    /** Get collections list */
    getCollectionsList(): void {
        this.collectionsService.getList()
            .subscribe(
                preparedData => {
                    if(preparedData.data.length > 0){
                        this.collections = preparedData.data;
                    }
                }
            );
    }

    /**
     * Select field type properties
     * @param {string} type
     * @param {string} fieldTypeName
     */
    selectFieldTypeProperties(type: string, fieldTypeName?: string): void {
        if(fieldTypeName){
            this.fieldModel[type + '_type'] = fieldTypeName;
        }
        let fieldType = _.find(this.fieldTypes, {name: this.fieldModel[type + '_type']});
        if(!fieldType){
            this.fieldTypeProperties[type] = [];
            return;
        }
        this.fieldTypeProperties[type] = _.clone(fieldType[type + 'Properties']);
        let propNames = _.map(this.fieldTypeProperties[type], 'name');
        let modelField = type + '_properties';
        this.fieldModel[modelField] = _.pick(this.fieldModel[modelField], propNames);
        for(let i in this.fieldTypeProperties[type]){
            if(this.fieldTypeProperties[type].hasOwnProperty(i)){
                let fldName = this.fieldTypeProperties[type][i].name;
                if(typeof this.fieldModel[modelField][fldName] == 'undefined'){
                    this.fieldModel[modelField][fldName] = this.fieldTypeProperties[type][i].default_value;
                }
            }
        }
        if(type == 'input' && !this.fieldModel.output_type){
            this.selectFieldTypeProperties('output', this.fieldModel['input_type']);
        }
    }

    /** Add collection */
    addCollection(){
        const fieldName = 'new_collection';
        const control = this.form.get(fieldName);
        if(!control.valid){
            return false;
        }
        this.formErrors[fieldName] = '';
        const value = control.value;

        if( this.collections.indexOf(value) > -1){
            this.formErrors[fieldName] += this.validationMessages[fieldName].exists;
            return false;
        }
        this.collections.push(value);
        this.model.collection = value;
        this.elementAddCollectionBlock.nativeElement.style.display = 'none';
        return true;
    }

    /** Delete collection */
    deleteCollection(popover: NgbPopover){
        if(!this.model.collection){
            return;
        }

        if(popover.isOpen()){
            popover.close();
            return;
        }

        let popoverContent: any;
        //popover.container = 'body';
        popover.placement = 'top';
        popover.popoverTitle = 'Confirm';

        let confirm = function(){
            this.loading = true;
            this.collectionsService.deleteItemByName(this.model.collection)
                .then((res) => {
                    if(res.success){

                        let index = this.collections.indexOf(this.model.collection);
                        if(index > -1){
                            this.collections.splice(index, 1);
                            this.model.collection = this.collections[0];
                        }
                        popover.close();

                    } else {
                        if(res.msg){
                            popoverContent.message = res.msg;
                        }
                    }
                    this.loading = false;
                });
        };

        popoverContent = {
            p: popover,
            confirm: confirm.bind(this),
            message: ''
        };

        popover.open(popoverContent);
    }

    /** Add group */
    addGroup(){
        const fieldName = 'new_group';
        const control = this.fieldForm.get(fieldName);
        if( !control || !control.valid || !control.value ){
            return false;
        }
        this.formErrors['fld_'+fieldName] = '';
        const value = control.value;
        let index = this.model.groups.indexOf(value);
        if( index > -1 ){
            this.formErrors['fld_'+fieldName] += this.validationMessages['fld_'+fieldName].exists;
            return false;
        }
        this.model.groups.push(value);
        this.fieldModel.group = value;
        this.elementAddGroupBlock.nativeElement.style.display = 'none';
        return true;
    }

    /** Delete group */
    deleteGroup() {
        let currentGroupName = this.fieldForm.get('group').value;
        let index = _.findIndex(this.model.fields, {group: currentGroupName});
        this.errorFieldMessage = '';
        if (index > -1) {
            this.errorFieldMessage = 'You can\'t delete a group because it is not empty.';
            return;
        }
        index = this.model.groups.indexOf(currentGroupName);
        if (index > -1) {
            this.model.groups.splice(index, 1);
        }
    }

    /**
     * Edit field
     * @param field
     */
    editField(field: ContentField) {
        this.action = 'edit_field';
        this.fieldModel = _.clone(field);
        let newFormValue = {};
        for (const key in this.fieldsFormOptions) {
            if (!this.fieldsFormOptions.hasOwnProperty(key)) {
                continue;
            }
            newFormValue[key] = field[key] || '';
        }
        this.fieldForm.setValue(newFormValue);
        this.currentFieldName = this.fieldModel.name;
        this.fld_submitted = false;
    }

    /**
     * Copy field
     * @param field
     */
    copyField(field: ContentField) {
        this.action = 'add_field';
        this.fieldModel = _.clone(field);
        this.fieldModel.name = '';
        this.fieldForm.setValue(this.fieldModel);
        this.currentFieldName = '';
        this.fld_submitted = false;
    }

    /**
     * Delete field
     * @param field
     */
    deleteField(field: ContentField){
        let index = _.findIndex( this.model.fields, {name: field.name} );
        if( index == -1 ){
            this.errorMessage = 'Field not found.';
            return;
        }
        this.model.fields.splice(index, 1);
    }

    /** Reset field form */
    resetFieldForm(){
        this.action = 'add_field';
        this.errorMessage = '';
        this.errorFieldMessage = '';
        this.fld_submitted = false;
        this.currentFieldName = '';
        this.fieldForm.reset();
        this.fieldModel = new ContentField(0, '', '', '', '', {}, '', {}, '', false, false, false);
    }

    /** Cancel edit field */
    editFieldCancel(){
        this.resetFieldForm();
        this.onValueChanged('fieldForm', 'fld_');
    }

    /** Change field order index */
    fieldMove(index: number, direction: string): void{
        if((direction == 'up' && index === 0)
            || (direction == 'down' && index === this.model.fields.length - 1)){
            return;
        }
        let newIndex = direction == 'up' ? index - 1 : index + 1;
        let field = this.model.fields[index];

        this.model.fields.splice(index, 1);
        this.model.fields.splice(newIndex, 0, field);
    }

    /** Submit field */
    submitField() {
        this.fld_submitted = true;
        if (!this.fieldForm.valid) {
            this.onValueChanged('fieldForm', 'fld_');
            this.fld_submitted = false;
            return;
        }
        let data = _.clone(this.fieldModel);
        let index = _.findIndex(this.model.fields, {name: data.name});
        if (index > -1 && this.currentFieldName != data.name) {
            this.errorMessage = 'A field named "' + data.name + '" already exists.';
            return;
        }

        if (this.action == 'add_field') {
            this.model.fields.push(_.clone(data));
        }
        else if (this.action == 'edit_field') {
            index = _.findIndex(this.model.fields, {name: this.currentFieldName});
            if (index > -1) {
                this.model.fields[index] = _.clone(data);
            }
        }
        this.resetFieldForm();
    }

    save() {
        this.submitted = true;

        if(!this.form.valid){
            this.onValueChanged('form');
            this.submitted = false;
            return;
        }

        let callback = function(res: any){
            if(res.success){
                this.closeModal();
            } else {
                if(res.msg){
                    this.submitted = false;
                    this.errorMessage = res.msg;
                }
            }
        };

        if(this.model.id){
            this.dataService.update(this.model).then(callback.bind(this));
        } else {
            this.dataService.create(this.model).then(callback.bind(this));
        }
    }
}

@Component({
    selector: 'shk-content-types',
    templateUrl: 'templates/catalog-content_types.html',
    providers: [ ContentTypesService ]
})
export class ContentTypesComponent extends PageTableAbstractComponent {

    title: string = 'Типы контента';

    constructor(
        dataService: ContentTypesService,
        activeModal: NgbActiveModal,
        modalService: NgbModal,
        titleService: Title
    ) {
        super(dataService, activeModal, modalService, titleService);
    }

    //TODO: get from settings
    tableFields = [
        {
            name: 'name',
            title: 'Системное имя',
            output_type: 'text',
            output_properties: {}
        },
        {
            name: 'title',
            title: 'Название',
            output_type: 'text',
            output_properties: {}
        },
        {
            name: 'collection',
            title: 'Коллекция',
            output_type: 'text',
            output_properties: {}
        },
        {
            name: 'is_active',
            title: 'Статус',
            output_type: 'boolean',
            output_properties: {}
        }
    ];

    getModalContent(){
        return ContentTypeModalContent;
    }

}