import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicReactiveFormsComponent, DynamicReactiveFormsModule } from 'dynamic-reactive-forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicReactiveFormsModule
  ],
  providers: [],
  exports:[DynamicReactiveFormsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
