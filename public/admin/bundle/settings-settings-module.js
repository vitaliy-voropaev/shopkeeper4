(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"24Yq":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(n){for(var e in n)t.hasOwnProperty(e)||(t[e]=n[e])}(e("DqLj"))},"7wo0":function(n,t,e){"use strict";e.r(t);var s=e("CcnG"),a=e("Ip0R"),o=e("d2mR"),i=e("ZYCi"),l=e("LvDl"),c=e("24Yq"),r=function(){return function(n,t,e,s,a){this.changed=n,this.loading=t,this.values=e,this.defaultOptions=s,this.defaultValues=a}}(),d=e("wgQU"),g=e("b1TM"),S=e("A7o+"),p=function(n,t,e,s){var a,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,t,e,s);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},E=function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},b=function(){function n(n,t,e,s){this.messageService=n,this.settingsService=t,this.appSettings=e,this.translateService=s,this.loading=!1,this.forms={},this.composerPackages=[],this.composerPackageName="",this.composerPackageVersion="",this.settings={SETTINGS_MAIN:new r(!1,!0,[],null),SETTINGS_ORDER_STATUSES:new r(!1,!0,[],{template:{value:"userEmailStatus",type:"text"},color:{value:"#00aeff",type:"text"}}),SETTINGS_DELIVERY:new r(!1,!0,[],{price:{value:0,type:"number"},priceLimit:{value:0,type:"number"}}),SETTINGS_PAYMENT:new r(!1,!0,[],{value:{value:"",type:"text"}}),SETTINGS_CURRENCY:new r(!1,!0,[],{value:{value:"",type:"number"}}),SETTINGS_COMPOSER_PACKAGES:new r(!1,!0,[],null)},this.baseUrl=this.appSettings.settings.webApiUrl+"/"}return n.prototype.ngOnInit=function(){this.getSettings(),this.getComposerPackages()},n.prototype.getSettings=function(){var n=this;this.settingsService.getList().subscribe(function(t){t.SETTINGS_MAIN&&(n.settings.SETTINGS_MAIN.values=t.SETTINGS_MAIN,n.settings.SETTINGS_MAIN.defaultValues=Object(l.cloneDeep)(t.SETTINGS_MAIN),n.settings.SETTINGS_MAIN.loading=!1),t.SETTINGS_ORDER_STATUSES&&(n.settings.SETTINGS_ORDER_STATUSES.values=t.SETTINGS_ORDER_STATUSES,n.settings.SETTINGS_ORDER_STATUSES.defaultValues=Object(l.cloneDeep)(t.SETTINGS_ORDER_STATUSES),n.settings.SETTINGS_ORDER_STATUSES.loading=!1),t.SETTINGS_DELIVERY&&(n.settings.SETTINGS_DELIVERY.values=t.SETTINGS_DELIVERY,n.settings.SETTINGS_DELIVERY.defaultValues=Object(l.cloneDeep)(t.SETTINGS_DELIVERY),n.settings.SETTINGS_DELIVERY.loading=!1),t.SETTINGS_PAYMENT&&(n.settings.SETTINGS_PAYMENT.values=t.SETTINGS_PAYMENT,n.settings.SETTINGS_PAYMENT.defaultValues=Object(l.cloneDeep)(t.SETTINGS_PAYMENT),n.settings.SETTINGS_PAYMENT.loading=!1),t.SETTINGS_CURRENCY&&(n.settings.SETTINGS_CURRENCY.values=t.SETTINGS_CURRENCY,n.settings.SETTINGS_CURRENCY.defaultValues=Object(l.cloneDeep)(t.SETTINGS_CURRENCY),n.settings.SETTINGS_CURRENCY.loading=!1)})},n.prototype.addSetting=function(n){var t={name:"",description:"",options:Object(l.cloneDeep)(this.settings[n].defaultOptions)};this.settings[n].values.push(t)},n.prototype.deleteSetting=function(n,t){this.settings[n].values.splice(t,1),this.settings[n].changed=!0},n.prototype.saveSettings=function(n){var t=this,e=this.settings[n].values;this.settings[n].loading=!0,this.settingsService.updateGroup(n,e).subscribe(function(e){t.messageService.add({key:"message",severity:"success",summary:t.getLangString("MESSAGE"),detail:t.getLangString("DATA_SAVED_SUCCESSFULLY")}),t.settings[n].defaultValues=e,t.settings[n].loading=!1,t.settings[n].changed=!1,t.pageReload()},function(e){e.error&&t.messageService.add({key:"message",severity:"error",summary:t.getLangString("ERROR"),detail:e.error}),t.settings[n].loading=!1})},n.prototype.getCurrentLocale=function(){var n=Object(l.findIndex)(this.settings.SETTINGS_MAIN.values,{name:"locale"});return n>-1?String(this.settings.SETTINGS_MAIN.values[n].value):""},n.prototype.getLangString=function(n){return this.translateService.store.translations[this.translateService.currentLang]&&this.translateService.store.translations[this.translateService.currentLang][n]||n},n.prototype.resetSettingsForm=function(n){var t=this.settings[n].defaultValues.length;t<this.settings[n].values.length&&this.settings[n].values.splice(t-1,this.settings[n].values.length-t),Object(l.extend)(this.settings[n].values,Object(l.cloneDeepWith)(this.settings[n].defaultValues)),this.settings[n].loading=!1,this.settings[n].changed=!1},n.prototype.runActionPost=function(n){var t=this;this.loading=!0,this.settingsService.runActionPost(n).subscribe(function(e){t.loading=!1,["update_internationalization"].indexOf(n)>-1&&t.pageReload()},function(n){n.error&&t.messageService.add({key:"message",severity:"error",summary:t.getLangString("ERROR"),detail:n.error}),t.loading=!1})},n.prototype.getComposerPackages=function(){var n=this;this.settings.SETTINGS_COMPOSER_PACKAGES.loading=!0,this.settingsService.getComposerPackagesList().subscribe(function(t){n.composerPackages=t,n.settings.SETTINGS_COMPOSER_PACKAGES.loading=!1},function(t){n.settings.SETTINGS_COMPOSER_PACKAGES.loading=!1})},n.prototype.requirePackage=function(n){var t=this;n&&n.preventDefault(),this.composerPackageName&&(this.settings.SETTINGS_COMPOSER_PACKAGES.loading=!0,this.settingsService.composerRequirePackage(this.composerPackageName,this.composerPackageVersion).subscribe(function(n){t.composerPackageName="",t.composerPackageVersion="",t.settings.SETTINGS_COMPOSER_PACKAGES.loading=!1},function(n){n.error&&t.messageService.add({key:"message",severity:"error",summary:t.getLangString("ERROR"),detail:n.error}),t.settings.SETTINGS_COMPOSER_PACKAGES.loading=!1}))},n.prototype.onValueChanged=function(n){this.settings[n].changed=!0},n.prototype.pageReload=function(){window.location.reload()},n.title="SETTINGS",n=p([Object(s.Component)({selector:"app-settings",template:e("hK21"),providers:[c.MessageService]}),E("design:paramtypes",[c.MessageService,g.a,d.a,S.c])],n)}(),T=function(n,t,e,s){var a,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,t,e,s);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},u=[{path:"",component:b}],h=function(){function n(){}return n=T([Object(s.NgModule)({imports:[i.RouterModule.forChild(u)],exports:[i.RouterModule]})],n)}();e.d(t,"SettingsModule",function(){return m});var v=function(n,t,e,s){var a,o=arguments.length,i=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,e):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(n,t,e,s);else for(var l=n.length-1;l>=0;l--)(a=n[l])&&(i=(o<3?a(i):o>3?a(t,e,i):a(t,e))||i);return o>3&&i&&Object.defineProperty(t,e,i),i},m=function(){function n(){}return n=v([Object(s.NgModule)({imports:[a.CommonModule,o.a,h],providers:[g.a],declarations:[b]})],n)}()},hK21:function(n,t){n.exports='<div class="card">\n    <div class="card-body" [class.loading]="loading">\n\n        <div class="float-md-left">\n            <h3>\n                <i class="icon-cog"></i>\n                {{\'SETTINGS\' | translate}}\n            </h3>\n        </div>\n\n        <div class="float-md-right">\n            <div ngbDropdown class="d-block d-md-inline-block" placement="bottom-right">\n                <button class="btn btn-info btn-sm d-block d-md-inline-block width-100 width-md-auto mb-2 mb-md-0" ngbDropdownToggle>\n                    <i class="icon-repeat"></i>\n                    &nbsp;\n                    <span>{{\'CLEAR_CACHE\' | translate}}</span>\n                </button>\n                <div ngbDropdownMenu>\n                    <button class="dropdown-item" (click)="runActionPost(\'clear_cache\')">\n                        <i class="icon-reload text-info"></i>\n                        &nbsp;\n                        {{\'CLEAR_FILE_CACHE\' | translate}}\n                    </button>\n                    <button class="dropdown-item" (click)="runActionPost(\'clear_system_cache\')">\n                        <i class="icon-repeat text-info"></i>\n                        &nbsp;\n                        {{\'CLEAR_SYSTEM_CACHE\' | translate}}\n                    </button>\n                    <button class="dropdown-item" (click)="runActionPost(\'update_internationalization\')">\n                        <i class="icon-globe text-info"></i>\n                        &nbsp;\n                        {{\'UPDATE_DICTIONARIES\' | translate}}\n                    </button>\n                    <button class="dropdown-item" (click)="runActionPost(\'update_filters\')">\n                        <i class="icon-tag text-info"></i>\n                        &nbsp;\n                        {{\'UPDATE_FILTERS\' | translate}}\n                    </button>\n                </div>\n            </div>\n        </div>\n\n        <div class="clearfix"></div>\n        <hr>\n\n        <div class="row">\n            <div class="col-md-6">\n\n                \x3c!-- settings --\x3e\n                <div [class.loading]="settings.SETTINGS_MAIN.loading">\n                    <label class="label-filled">{{\'SETTINGS_MAIN\' | translate}}</label>\n\n                    <div class="card mb-4">\n                        <div class="table-responsive">\n\n                            <table class="table table-divided mb-0">\n                                <colgroup>\n                                    <col width="60%">\n                                    <col width="40%">\n                                </colgroup>\n                                <thead>\n                                    <tr>\n                                        <th>{{\'PARAMETER\' | translate}}</th>\n                                        <th>{{\'VALUE\' | translate}}</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor="let setting of settings.SETTINGS_MAIN.values">\n                                        <td>\n                                            <span>{{setting.name | translate}}</span>\n                                        </td>\n                                        <td>\n                                            <input type="text" class="form-control form-control-sm" [(ngModel)]="setting.value" (ngModelChange)="onValueChanged(\'SETTINGS_MAIN\')">\n                                        </td>\n                                    </tr>\n                                    <tr *ngIf="settings.SETTINGS_MAIN.changed">\n                                        <td colspan="2" class="text-right">\n\n                                            <button type="button" class="btn btn-info btn-sm" (click)="saveSettings(\'SETTINGS_MAIN\')">\n                                                <i class="icon-check"></i>\n                                                &nbsp;\n                                                <span>{{\'SAVE\' | translate}}</span>\n                                            </button>\n                                            &nbsp;\n                                            <button type="button" class="btn btn-secondary btn-sm" (click)="resetSettingsForm(\'SETTINGS_MAIN\')" ngbTooltip="{{\'FORM_RESET\' | translate}}">\n                                                <i class="icon-reload"></i>\n                                            </button>\n\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n                        </div>\n                    </div>\n                </div>\n                \x3c!-- /settings --\x3e\n\n            </div>\n            <div class="col-md-6">\n\n                <ngb-accordion [closeOthers]="true" activeIds="accordion-settings-1" class="ngb-accordion">\n\n                    \x3c!-- statuses --\x3e\n                    <ngb-panel id="accordion-settings-1" [title]="\'SETTINGS_ORDER_STATUSES\' | translate">\n                        <ng-template ngbPanelContent>\n                            <div [class.loading]="settings.SETTINGS_DELIVERY.loading">\n                                <div class="text-muted">\n                                    {{\'SETTINGS_STATUSES_DESCRIPTION\' | translate}}\n                                </div>\n                                <div class="table-responsive">\n                                    <table class="table table-divided mb-0">\n                                        <colgroup>\n                                            <col width="40%">\n                                            <col width="40%">\n                                            <col width="10%">\n                                            <col width="10%">\n                                        </colgroup>\n                                        <thead>\n                                            <tr>\n                                                <th>\n                                                    {{\'NAME\' | translate}}\n                                                </th>\n                                                <th>\n                                                    {{\'MAIL_TEMPLATE\' | translate}}\n                                                </th>\n                                                <th>\n                                                    {{\'COLOR\' | translate}}\n                                                </th>\n                                                <th></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor="let setting of settings.SETTINGS_ORDER_STATUSES.values; let index=index">\n                                                <td>\n                                                    <input type="text" class="form-control form-control-sm" [(ngModel)]="setting.name" (ngModelChange)="onValueChanged(\'SETTINGS_ORDER_STATUSES\')">\n                                                </td>\n                                                <td>\n                                                    <input type="text" class="form-control form-control-sm" [(ngModel)]="setting.options.template.value" (ngModelChange)="onValueChanged(\'SETTINGS_ORDER_STATUSES\')">\n                                                </td>\n                                                <td class="text-center">\n                                                    <p-colorPicker\n                                                            [appendTo]="\'body\'"\n                                                            [(ngModel)]="setting.options.color.value"\n                                                            (ngModelChange)="onValueChanged(\'SETTINGS_ORDER_STATUSES\')"></p-colorPicker>\n                                                </td>\n                                                <td class="text-center">\n                                                    <button type="button" class="btn btn-secondary btn-sm" ngbTooltip="{{\'DELETE\' | translate}}" (click)="deleteSetting(\'SETTINGS_ORDER_STATUSES\', index)">\n                                                        <i class="icon-cross"></i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot>\n                                            <tr class="bg-faded">\n                                                <td colspan="4" class="text-center">\n                                                    <div class="relative">\n                                                        <div class="pos-absolute-right" *ngIf="settings.SETTINGS_ORDER_STATUSES.changed">\n\n                                                            <button type="button" class="btn btn-info btn-sm" (click)="saveSettings(\'SETTINGS_ORDER_STATUSES\')">\n                                                                <i class="icon-check"></i>\n                                                                &nbsp;\n                                                                <span>{{\'SAVE\' | translate}}</span>\n                                                            </button>\n                                                            &nbsp;\n                                                            <button type="button" class="btn btn-secondary btn-sm" (click)="resetSettingsForm(\'SETTINGS_ORDER_STATUSES\')" ngbTooltip="{{\'FORM_RESET\' | translate}}">\n                                                                <i class="icon-reload"></i>\n                                                            </button>\n\n                                                        </div>\n                                                    </div>\n                                                    <button type="button" class="btn btn-secondary btn-sm" (click)="addSetting(\'SETTINGS_ORDER_STATUSES\')">\n                                                        <i class="icon-plus"></i>\n                                                        &nbsp;\n                                                        <span>{{\'ADD\' | translate}}</span>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngb-panel>\n                    \x3c!-- /statuses --\x3e\n\n                    \x3c!-- delivery --\x3e\n                    <ngb-panel id="accordion-settings-2" [title]="\'SETTINGS_DELIVERY\' | translate">\n                        <ng-template ngbPanelContent>\n                            <div [class.loading]="settings.SETTINGS_DELIVERY.loading">\n                                <div class="text-muted">\n                                    {{\'SETTINGS_DELIVERY_DESCRIPTION\' | translate}}\n                                </div>\n                                <div class="table-responsive">\n                                    <table class="table table-divided mb-0">\n                                        <thead>\n                                            <tr>\n                                                <th>\n                                                    {{\'NAME\' | translate}}\n                                                </th>\n                                                <th>\n                                                    {{\'PRICE\' | translate}}\n                                                </th>\n                                                <th>\n                                                    {{\'MAX_PRICE\' | translate}}\n                                                </th>\n                                                <th></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor="let setting of settings.SETTINGS_DELIVERY.values; let index=index">\n                                                <td>\n                                                    <input type="text" class="form-control form-control-sm" [(ngModel)]="setting.name" (ngModelChange)="onValueChanged(\'SETTINGS_DELIVERY\')">\n                                                </td>\n                                                <td class="text-center">\n                                                    <input type="number" class="form-control form-control-sm mwidth-80 m-auto" step="1" min="0" [(ngModel)]="setting.options.price.value" (ngModelChange)="onValueChanged(\'SETTINGS_DELIVERY\')">\n                                                </td>\n                                                <td class="text-center">\n                                                    <input type="number" class="form-control form-control-sm mwidth-80 m-auto" step="1" min="0" [(ngModel)]="setting.options.priceLimit.value" (ngModelChange)="onValueChanged(\'SETTINGS_DELIVERY\')">\n                                                </td>\n                                                <td class="text-center">\n                                                    <button type="button" class="btn btn-secondary btn-sm" ngbTooltip="{{\'DELETE\' | translate}}" (click)="deleteSetting(\'SETTINGS_DELIVERY\', index)">\n                                                        <i class="icon-cross"></i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot>\n                                            <tr class="bg-faded">\n                                                <td colspan="4" class="text-center">\n                                                    <div class="relative">\n                                                        <div class="pos-absolute-right" *ngIf="settings.SETTINGS_DELIVERY.changed">\n\n                                                            <button type="button" class="btn btn-info btn-sm" (click)="saveSettings(\'SETTINGS_DELIVERY\')">\n                                                                <i class="icon-check"></i>\n                                                                &nbsp;\n                                                                <span>{{\'SAVE\' | translate}}</span>\n                                                            </button>\n                                                            &nbsp;\n                                                            <button type="button" class="btn btn-secondary btn-sm" (click)="resetSettingsForm(\'SETTINGS_DELIVERY\')" ngbTooltip="{{\'FORM_RESET\' | translate}}">\n                                                                <i class="icon-reload"></i>\n                                                            </button>\n\n                                                        </div>\n                                                    </div>\n                                                    <button type="button" class="btn btn-secondary btn-sm" (click)="addSetting(\'SETTINGS_DELIVERY\')">\n                                                        <i class="icon-plus"></i>\n                                                        &nbsp;\n                                                        <span>{{\'ADD\' | translate}}</span>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngb-panel>\n                    \x3c!-- /delivery --\x3e\n\n                    \x3c!-- payments --\x3e\n                    <ngb-panel id="accordion-settings-3" [title]="\'SETTINGS_PAYMENT\' | translate">\n                        <ng-template ngbPanelContent>\n                            <div [class.loading]="settings.SETTINGS_PAYMENT.loading">\n                                <div class="text-muted">\n                                    {{\'SETTINGS_PAYMENT_DESCRIPTION\' | translate}}\n                                </div>\n                                <div class="table-responsive">\n                                    <table class="table table-divided mb-0">\n                                        <colgroup>\n                                            <col width="45%">\n                                            <col width="45%">\n                                            <col width="10%">\n                                        </colgroup>\n                                        <thead>\n                                            <tr>\n                                                <th>\n                                                    {{\'NAME\' | translate}}\n                                                </th>\n                                                <th>\n                                                    {{\'VALUE\' | translate}}\n                                                </th>\n                                                <th></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor="let setting of settings.SETTINGS_PAYMENT.values; let index=index">\n                                                <td>\n                                                    <input type="text" class="form-control form-control-sm" [(ngModel)]="setting.name" (ngModelChange)="onValueChanged(\'SETTINGS_PAYMENT\')">\n                                                </td>\n                                                <td class="text-center">\n                                                    <input type="text" class="form-control form-control-sm" [(ngModel)]="setting.options.value.value" (ngModelChange)="onValueChanged(\'SETTINGS_PAYMENT\')">\n                                                </td>\n                                                <td class="text-center">\n                                                    <button type="button" class="btn btn-secondary btn-sm" ngbTooltip="{{\'DELETE\' | translate}}" (click)="deleteSetting(\'SETTINGS_PAYMENT\', index)">\n                                                        <i class="icon-cross"></i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot>\n                                            <tr class="bg-faded">\n                                                <td colspan="4" class="text-center">\n\n                                                    <div class="relative">\n                                                        <div class="pos-absolute-right" *ngIf="settings.SETTINGS_PAYMENT.changed">\n\n                                                            <button type="button" class="btn btn-info btn-sm" (click)="saveSettings(\'SETTINGS_PAYMENT\')">\n                                                                <i class="icon-check"></i>\n                                                                &nbsp;\n                                                                <span>{{\'SAVE\' | translate}}</span>\n                                                            </button>\n                                                            &nbsp;\n                                                            <button type="button" class="btn btn-secondary btn-sm" (click)="resetSettingsForm(\'SETTINGS_PAYMENT\')" ngbTooltip="{{\'FORM_RESET\' | translate}}">\n                                                                <i class="icon-reload"></i>\n                                                            </button>\n\n                                                        </div>\n                                                    </div>\n\n                                                    <button type="button" class="btn btn-secondary btn-sm" (click)="addSetting(\'SETTINGS_PAYMENT\')">\n                                                        <i class="icon-plus"></i>\n                                                        &nbsp;\n                                                        <span>{{\'ADD\' | translate}}</span>\n                                                    </button>\n\n                                                </td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngb-panel>\n                    \x3c!-- /payments --\x3e\n\n                    \x3c!-- currencies --\x3e\n                    <ngb-panel id="accordion-settings-4" [title]="\'SETTINGS_CURRENCY\' | translate">\n                        <ng-template ngbPanelContent>\n                            <div [class.loading]="settings.SETTINGS_CURRENCY.loading">\n                                <div class="text-muted">\n                                    {{\'SETTINGS_CURRENCY_RATE_DESCRIPTION\' | translate}}\n                                </div>\n                                <div class="table-responsive">\n                                    <table class="table table-divided mb-0">\n                                        <colgroup>\n                                            <col width="45%">\n                                            <col width="45%">\n                                            <col width="10%">\n                                        </colgroup>\n                                        <thead>\n                                            <tr>\n                                                <th>\n                                                    {{\'CURRENCY\' | translate}}\n                                                </th>\n                                                <th>\n                                                    {{\'VALUE\' | translate}}\n                                                </th>\n                                                <th></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr *ngFor="let setting of settings.SETTINGS_CURRENCY.values; let index=index">\n                                                <td>\n                                                    <input type="text" class="form-control form-control-sm" [(ngModel)]="setting.name" (ngModelChange)="onValueChanged(\'SETTINGS_CURRENCY\')">\n                                                </td>\n                                                <td class="text-center">\n                                                    <input type="number" class="form-control form-control-sm" step="1" min="0" [(ngModel)]="setting.options.value.value" (ngModelChange)="onValueChanged(\'SETTINGS_CURRENCY\')">\n                                                </td>\n                                                <td class="text-center">\n                                                    <button type="button" class="btn btn-secondary btn-sm" ngbTooltip="{{\'REMOVE\' | translate}}" (click)="deleteSetting(\'SETTINGS_CURRENCY\', index)">\n                                                        <i class="icon-cross"></i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                        <tfoot>\n                                            <tr class="bg-faded">\n                                                <td colspan="4" class="text-center">\n\n                                                    <div class="relative">\n                                                        <div class="pos-absolute-right" *ngIf="settings.SETTINGS_CURRENCY.changed">\n\n                                                            <button type="button" class="btn btn-info btn-sm" (click)="saveSettings(\'SETTINGS_CURRENCY\')">\n                                                                <i class="icon-check"></i>\n                                                                &nbsp;\n                                                                <span>{{\'SAVE\' | translate}}</span>\n                                                            </button>\n                                                            &nbsp;\n                                                            <button type="button" class="btn btn-secondary btn-sm" (click)="resetSettingsForm(\'SETTINGS_CURRENCY\')" ngbTooltip="{{\'FORM_RESET\' | translate}}">\n                                                                <i class="icon-reload"></i>\n                                                            </button>\n\n                                                        </div>\n                                                    </div>\n\n                                                    <button type="button" class="btn btn-secondary btn-sm" (click)="addSetting(\'SETTINGS_CURRENCY\')">\n                                                        <i class="icon-plus"></i>\n                                                        &nbsp;\n                                                        <span>{{\'ADD\' | translate}}</span>\n                                                    </button>\n\n                                                </td>\n                                            </tr>\n                                        </tfoot>\n                                    </table>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </ngb-panel>\n                    \x3c!-- /currencies --\x3e\n\n                    \x3c!-- composerPackages --\x3e\n                    <ngb-panel id="accordion-settings-5" [title]="\'SETTINGS_COMPOSER_PACKAGES\' | translate">\n                        <ng-template ngbPanelContent>\n\n                            <div [ngClass]="{\'loading\': settings.SETTINGS_COMPOSER_PACKAGES.loading}">\n                                <div class="pb-3 text-muted">\n                                    {{\'SETTINGS_COMPOSER_PACKAGES_DESCRIPTION\' | translate}}\n                                </div>\n\n                                <div class="max-height400">\n                                    <div class="table-responsive">\n                                        <table class="table table-divided mb-0">\n                                            <colgroup>\n                                                <col width="60%">\n                                                <col width="40%">\n                                            </colgroup>\n                                            <thead>\n                                                <tr>\n                                                    <th>\n                                                        {{\'NAME\' | translate}}\n                                                    </th>\n                                                    <th>\n                                                        {{\'VERSION\' | translate}}\n                                                    </th>\n                                                </tr>\n                                            </thead>\n                                            <tbody>\n                                                <tr *ngFor="let package of composerPackages">\n                                                    <td>{{ package.name }}</td>\n                                                    <td class="text-center">{{ package.version }}</td>\n                                                </tr>\n                                            </tbody>\n                                        </table>\n                                    </div>\n                                </div>\n\n                                \x3c!--<div class="card card-body p-2 mt-3">--\x3e\n                                    \x3c!--<div class="row no-gutters">--\x3e\n                                        \x3c!--<div class="col-5 pr-1">--\x3e\n                                            \x3c!--<input type="text" class="form-control form-control-sm" [(ngModel)]="composerPackageName">--\x3e\n                                        \x3c!--</div>--\x3e\n                                        \x3c!--<div class="col-4 pl-1">--\x3e\n                                            \x3c!--<input type="text" class="form-control form-control-sm" [(ngModel)]="composerPackageVersion">--\x3e\n                                        \x3c!--</div>--\x3e\n                                        \x3c!--<div class="col-3 pl-2">--\x3e\n                                            \x3c!--<button type="button" class="btn btn-success btn-sm btn-block" (click)="requirePackage($event)">--\x3e\n                                                \x3c!--{{\'INSTALL\' | translate}}--\x3e\n                                            \x3c!--</button>--\x3e\n                                        \x3c!--</div>--\x3e\n                                    \x3c!--</div>--\x3e\n                                \x3c!--</div>--\x3e\n                            </div>\n\n                        </ng-template>\n                    </ngb-panel>\n                    \x3c!-- /composerPackages --\x3e\n\n                </ngb-accordion>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<p-toast key="message" position="bottom-right"></p-toast>\n'}}]);