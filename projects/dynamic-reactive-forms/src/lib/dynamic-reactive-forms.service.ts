import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputTypeEnum } from './enums/input-type.enum';
import { FormControlConfig } from './interfaces/config.interface';

@Injectable({ providedIn: 'root' })
export class DynamicReactiveFormsService {

  constructor() { }

  createFromGroup(configObj: FormControlConfig<any>[]) {
    if (typeof configObj == 'undefined' || configObj.length === 0) {
      console.error("Form control config is undefined or empty");
      return;
    }
    const group: any = {};
    let sortedObj = configObj.sort((n1, n2) => (n1.order > n2.order) ? 1 : -1);

    sortedObj.forEach(formControl => {
      let validators = [];
      if (formControl?.required) {
        validators.push(Validators.required);
      }
      if (formControl.max) {
        validators.push(Validators.max(formControl.max));
      }
      if (formControl.min) {
        validators.push(Validators.min(formControl.min));
      }
      if (formControl.validationPatterns && formControl.validationPatterns.length > 0) {
        formControl.validationPatterns.forEach(x => {
          validators.push(Validators.pattern(x));
        })
      }
      const defaultValue = (formControl.defaultValue ? formControl.defaultValue : this.getDefaultValue(formControl.inputType || InputTypeEnum.Text));
      group[formControl.name] = validators.length > 0 ? new FormControl(defaultValue, validators) : new FormControl(defaultValue);
    })
    return new FormGroup(group);
  }

  private getDefaultValue(formControlType: InputTypeEnum) {
    let defaultValue: any = undefined;
    switch (formControlType) {
      case (InputTypeEnum.Text ||
        InputTypeEnum.Textbox ||
        InputTypeEnum.Url ||
        InputTypeEnum.Password ||
        InputTypeEnum.Search ||
        InputTypeEnum.Tel ||
        InputTypeEnum.Email):
        defaultValue = null;
        break;
      case (InputTypeEnum.Date || InputTypeEnum.DatetimeLocal):
        defaultValue = new Date();
        break;
      case (InputTypeEnum.Number):
        defaultValue = 0;
        break;
      case (InputTypeEnum.Month || InputTypeEnum.Week):
        defaultValue = 1;
        break;
      case (InputTypeEnum.Time):
        defaultValue = new Date().getTime();
        break;
      case (InputTypeEnum.Color):
        defaultValue = '#fff'
        break;
      default:
        defaultValue = null;
        break;
    }
    return defaultValue;
  }
}
