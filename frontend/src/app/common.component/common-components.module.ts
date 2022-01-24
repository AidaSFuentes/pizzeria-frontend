import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowErrorsMessagesComponent } from './show-errors-messages/show-errors-messages.component';

@NgModule({
  declarations: [
    ShowErrorsMessagesComponent,
  ],
  exports: [
    ShowErrorsMessagesComponent,
  ],
  imports: [
    CommonModule,

  ]
})
export class CommonComponentsModule { }
