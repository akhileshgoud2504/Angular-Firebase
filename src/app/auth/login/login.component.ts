import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/types/book';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  ngOnInit(): void {}
  constructor(private authService : AuthService){}
  form : Auth = {
    email : '',
    password : ''
  }
  submitLogin(){
    this.authService.login(this.form);
  }
}
