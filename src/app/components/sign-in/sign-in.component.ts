import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShopServiceService } from 'src/app/services/shop-services.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitted = false;
  notification = false;
  signIn !: FormGroup;
  constructor(private formBuilder: FormBuilder, private shopServices: ShopServiceService) { }

  ngOnInit(): void {
    this.signIn = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(5)]]});
  }

  get f(): any {
    return this.signIn.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.signIn.invalid) {
      this.notification = true;
      return;
    }

    this.notification = false;
    localStorage.setItem('admin', this.f.email.value);
    console.log(this.f);
    if (this.f.email.value === 'admin@gmail.com' && this.f.password.value === 'admin') {
      this.shopServices.signInSubject.next('ADMIN');
    } else {
      this.shopServices.signInSubject.next('SIGN IN');
    }
  }

}
