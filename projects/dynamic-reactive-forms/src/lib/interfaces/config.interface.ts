import { InputTypeEnum } from "../enums/input-type.enum";

export interface Config<T> {
  name: string,
  order: number,
  defaultValue: T,
  inputType: InputTypeEnum
  required?: boolean,
  label?: string,
  max?: number,
  min?: number,
  validationPatterns?: string[];
}

export class FormControlConfig<T> implements Config<T>{

  name: string;
  order: number;
  defaultValue: T;
  inputType: InputTypeEnum;
  required?: boolean;
  label?: string;
  max?: number;
  min?: number;
  validationPatterns?: string[];

  constructor(config: Config<T>) {
    this.name = config.name || '';
    this.order = config.order === undefined ? 1 : config.order;
    this.inputType = config.inputType;
    this.required = !!config.required;
    this.defaultValue = config.defaultValue;
    this.label = config.label || '';
    this.max = config.max || 0;
    this.min = config.min || 0;
    this.validationPatterns = config.validationPatterns || [];
  }

}
