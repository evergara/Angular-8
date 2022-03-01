import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CustomValidators } from '@feature/contact/validators/validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailField: FormControl;
  nameField: FormControl;

  constructor() { 
    const validations = [Validators.minLength(10), 
                         Validators.maxLength(20),
                        Validators.required];
    this.emailField = new FormControl('', validations);
    this.emailField.valueChanges.pipe(
      debounceTime(250),
    ).subscribe(value => {
      console.log(value);
    })

    this.nameField = new FormControl('', [
      Validators.required,
      CustomValidators.isEmerson,
    ]);
  }

  ngOnInit(): void {
  }

  getValue() {
    console.log(this.nameField.value);
  }

}
