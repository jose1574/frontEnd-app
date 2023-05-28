import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';

import { UserDto } from '../dtos/user.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  checkoutForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ) {}


  signIn() {
   const result = this.loginService.signIn(this.checkoutForm.value)

   result.subscribe((token: any) => {
    console.log('este es el token de autenticación ', token);
   } )
  }

}
