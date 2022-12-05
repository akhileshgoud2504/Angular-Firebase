import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/types/book';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  ngOnInit(): void {}
  constructor(){}
  form : Auth = {
    email : '',
    password : ''
  }
  submitLogin(){
    console.log(this.form)
  }
}
