import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicReactiveFormsService, FormControlConfig, InputTypeEnum } from 'dynamic-reactive-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-reactive-forms-demo';
  config: FormControlConfig<any>[] = [];
  form: FormGroup | undefined;

  constructor(private dynamicReactiveForms: DynamicReactiveFormsService) {

  }

  ngOnInit() {

    this.config = [
      {
        defaultValue: null,
        name: 'First Name',
        required: true,
        inputType: InputTypeEnum.Text,
        order: 1,

      } as unknown as FormControlConfig<string>,
      {
        defaultValue: null,
        name: 'Last Name',
        required: true,
        inputType: InputTypeEnum.Text,
        order: 2
      } as unknown as FormControlConfig<string>,
      {
        name: 'Age',
        min: 1,
        inputType: InputTypeEnum.Number,
        order: 3
      } as unknown as FormControlConfig<number>,
      {
        name: 'DOB',
        required: true,

        inputType: InputTypeEnum.Date,
        order: 3
      } as unknown as FormControlConfig<Date>,
    ]

    this.form = this.dynamicReactiveForms.createFromGroup(this.config);
    console.log(this.form?.value)
  }
}
