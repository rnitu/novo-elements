// NG2
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// APP
import { NovoPickerModule } from './../picker/Picker.module';
import { NovoChipElement, NovoChipsElement } from './Chips';
import { ChipsStateService } from './ChipsStateService';
import { ChipsDataService } from './ChipsDataService';

@NgModule({
    imports: [CommonModule, FormsModule, NovoPickerModule],
    declarations: [NovoChipElement, NovoChipsElement],
    exports: [NovoChipElement, NovoChipsElement],
    providers: [ChipsStateService, ChipsDataService]
})
export class NovoChipsModule {
}
