import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from "lodash";

import { ContentField } from "./models/content_field.model";
import { SystemNameService } from './services/system-name.service';

@Component({
    selector: 'input-field-renderer',
    templateUrl: 'templates/render-input-field.html',
    providers: [ SystemNameService ]
})
export class InputFieldRenderComponent implements OnInit, OnChanges {

    @Input() fields: ContentField[];
    @Input() groups: string[];
    @Input() model: any;
    @Input() form: FormGroup;
    @Input() submitted: boolean;
    @Input() formErrors: {[key: string]: string};
    @Input() validationMessages: {[key: string]: {[key: string]: string}};

    constructor(
        private systemNameService: SystemNameService
    ) {

    }

    ngOnInit(): void {
        this.buildControls();
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        this.buildControls();
    }

    buildControls() {
        this.fields.forEach(function(field){
            this.setDefaultValue(field);
            this.setFieldProperties(field);
            this.formErrors[field.name] = '';
            if(!this.validationMessages[field.name]){
                this.validationMessages[field.name] = {};
            }

            if (!this.form.controls[field.name]) {
                let validators = this.getValidators(field);
                let control = new FormControl(this.model[field.name], validators);
                this.form.addControl(field.name, control);
            }
        }.bind(this));
    }

    setFieldProperties(field: ContentField): void {

        switch (field.input_type) {
            case 'number':

                const propertiesDefault = {
                    min: 0,
                    max: null,
                    step: 1
                };

                field.input_properties = _.extend({}, propertiesDefault, field.input_properties);

                break;
            default:

                break;
        }
    }

    setDefaultValue(field: ContentField): void {
        if(this.model[field.name]){
            return;
        }

        let defaultValue = null;
        if (typeof field.input_properties.value !== 'undefined'
            && field.input_properties.value) {
            defaultValue = field.input_properties.value;
        }

        switch (field.input_type){
            case 'date':
                if(!this.model[field.name]){
                    const now = new Date();
                    // this.model[fieldName] = {
                    //     year: now.getFullYear(),
                    //     month: now.getMonth() + 1,
                    //     day: now.getDate()
                    // };
                    this.model[field.name] = new Date();
                }
                break;
            case 'number':

                this.model[field.name] = defaultValue ? parseInt(defaultValue) : null;

                break;
        }
    }

    getValidators(field: ContentField): any[] {
        let validators = [];
        if(field.required){
            validators.push(Validators.required);
            this.validationMessages[field.name].required = field.title + ' is required.';
        }
        return validators;
    }

    generateName(fieldName: string): void {
        const title = this.model.title || '';
        this.model[fieldName] = this.systemNameService.generateName(title);
    }

}