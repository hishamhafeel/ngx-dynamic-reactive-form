import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicReactiveFormsService, FormControlConfig } from 'dynamic-reactive-forms';

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
    this.config = [{
      defaultValue: '',
      name: 'First Name',
      order: 1
    }]

    this.form = this.dynamicReactiveForms.createFromGroup(this.config);
    console.log(this.form?.value)
  }
}
