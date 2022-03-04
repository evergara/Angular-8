import { Directive } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[isEmerson]'
})
export class CustomValidators {

  static isEmerson(control: AbstractControl) {
    const value = control.value;
    if (value !== 'emerson') {
      return { isEmerson: true };
    }
    return null;
  }

  static isValidPassword(form: AbstractControl) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (confirmPassword?.value !== password?.value) {
      return { passwordNotValid: true };
    }
    return null;
  }

}