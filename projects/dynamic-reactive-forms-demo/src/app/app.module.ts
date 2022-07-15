import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicReactiveFormsComponent, DynamicReactiveFormsModule, DynamicReactiveFormsService } from 'dynamic-reactive-forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicReactiveFormsModule
  ],
  providers: [
    DynamicReactiveFormsService
  ],
  exports:[DynamicReactiveFormsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
