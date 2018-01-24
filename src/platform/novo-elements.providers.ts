// NG2
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
// APP
import { GooglePlacesService } from './elements/places/places.service';
import { NovoDragulaService } from './elements/dragula/DragulaService';
import { NovoModalService } from './elements/modal/ModalService';
import { NovoModalRef } from './elements/modal/Modal';
import { NovoToastService } from './elements/toast/ToastService';
import { ComponentUtils } from './utils/component-utils/ComponentUtils';
import { FormUtils } from './utils/form-utils/FormUtils';
import { EntityUtils } from './utils/entity-utils/EntityUtils';
import { FieldInteractionApi } from './elements/form/FieldInteractionApi';
import { DateFormatService } from './services/date-format/DateFormat';
import { GlobalRef, BrowserGlobalRef } from './services/global/global.service';
import { LocalStorageService } from './services/storage/storage.service';

const NOVO_ELEMENTS_PROVIDERS = [
    { provide: NovoDragulaService, useClass: NovoDragulaService },
    { provide: NovoModalRef, useClass: NovoModalRef },
    { provide: NovoModalService, useClass: NovoModalService },
    { provide: GooglePlacesService, useClass: GooglePlacesService },
    { provide: NovoToastService, useClass: NovoToastService },
    { provide: ComponentUtils, useClass: ComponentUtils },
    { provide: GlobalRef, useClass: BrowserGlobalRef },
    { provide: LocalStorageService, useClass: LocalStorageService },
    FieldInteractionApi,
    DateFormatService,
];

@NgModule({
    imports: []
})
export class NovoElementProviders {
    static forRoot() {
        return {
            ngModule: NovoElementProviders,
            providers: [...NOVO_ELEMENTS_PROVIDERS]
        };
    }

    static forChild() {
        return {
            ngModule: NovoElementProviders
        };
    }
}