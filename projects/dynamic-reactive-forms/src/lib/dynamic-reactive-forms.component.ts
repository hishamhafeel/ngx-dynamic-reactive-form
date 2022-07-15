import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTypeEnum } from './enums/input-type.enum';
import { FormControlConfig } from './interfaces/config.interface';

@Component({
  selector: 'ngx-dynamic-reactive-forms',
  templateUrl: './dynamic-reactive-forms.component.html',
  styleUrls: ['./dynamic-reactive-forms.component.scss']
})
export class DynamicReactiveFormsComponent implements AfterViewInit {
  @Input('config') config: FormControlConfig<any>[] = [];

  constructor() { }

  ngAfterViewInit() {
  }


}
