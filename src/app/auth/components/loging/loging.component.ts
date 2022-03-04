import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '@auth/services/auth.service';
import { PasswordValidators } from '@shared/validators/validatorpassword'; 
import { LoginData } from '@auth/model/login-data';


@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.scss']
})
export class LogingComponent implements OnInit {

  //@ts-ignore
  form: FormGroup;
  loginData:LoginData;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) {
    this.buildForm();
    this.loginData = {
      email:"",
      password:""
    };
  }

  ngOnInit() {
  }

  login() {
    if (this.form.valid) {

      //const email = this.form.value.email;
      //const password = this.form.value.password;
      this.loginData.email = this.form.value.email;
      this.loginData.password = this.form.value.password;
      this.authService.login(this.loginData)
      .then(data => {
        this.router.navigate(['/cms']);
      })
      .catch(error => {
        this.openMessage(error.message);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(8)]],
    });
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

  private openMessage(message: string) {
    this.matSnackBar.open(message, 'Cerrar', {
      duration: 3000
    });
  }

}
