import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),      // minimum 3 characters
      Validators.maxLength(20),     // maximum 20 characters
      Validators.pattern('^[a-zA-Z ]+$') // only letters and spaces
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', Validators.required),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      console.warn('Form invalid:', this.form.errors);
    }
  }
}
