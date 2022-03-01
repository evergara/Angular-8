import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static isEmerson(control: AbstractControl) {
    const value = control.value;
    if (value !== 'emerson') {
      return { isEmerson: true };
    }
    return null;
  }

}