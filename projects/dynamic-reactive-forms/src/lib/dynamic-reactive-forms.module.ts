import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicReactiveFormsComponent } from './dynamic-reactive-forms.component';



@NgModule({
  declarations: [
    DynamicReactiveFormsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicReactiveFormsComponent
  ]
})
export class DynamicReactiveFormsModule { }
