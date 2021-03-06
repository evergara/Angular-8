import { AbstractControl } from '@angular/forms';

export class PasswordValidators {
  static isValidPassword(form: AbstractControl) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (confirmPassword?.value !== password?.value) {
      return { passwordNotValid: true };
    }
    return null;
  }

}