import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  //@ts-ignore
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      image: [''],
      price: [10000, [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(100)]],
      category: ['', [Validators.required]],
    });
    
    // this.form
    // .valueChanges
    // .subscribe(data => {
    //   console.log(data);
    // });
  }

  createProduct() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  get nameField() {
    return this.form.get('name');
  }

}
