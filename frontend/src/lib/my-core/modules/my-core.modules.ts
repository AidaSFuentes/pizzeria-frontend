import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from '../pipes/cadenas.pipe';
import { SizerComponent } from '../components/sizer.component';
import { MIS_VALIDADORES } from '../directives/validator.directive';
import { ShowDirective, ShowErrorsDirective } from '../directives/atribute.directives';




@NgModule({
  declarations: [
    PIPES_CADENAS, SizerComponent, MIS_VALIDADORES, ShowDirective, ShowErrorsDirective,
  ],
  exports: [
    PIPES_CADENAS, SizerComponent, MIS_VALIDADORES, ShowDirective, ShowErrorsDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class MyCoreModule { }
