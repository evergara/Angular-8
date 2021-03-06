import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginData } from '@auth/model/login-data';
import { AuthService } from '@auth/services/auth.service';
import { PasswordValidators } from '@shared/validators/validatorpassword'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  register() {
    if (this.form.valid) {
      let loginData:LoginData = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      this.authService.register(loginData)
      .then(data => {
        this.router.navigate(['/auth/login']);
      })
      .catch(error => {
        console.error(error);
        this.openMessage(error.message);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [ Validators.required, Validators.minLength(8)]],
    }, {
      validators: [ PasswordValidators.isValidPassword ]
    });
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

  get confirmPasswordField() {
    return this.form.get('confirmPassword');
  }

  private openMessage(message: string) {
    this.matSnackBar.open(message, 'Cerrar', {
      duration: 3000
    });
  }


}
