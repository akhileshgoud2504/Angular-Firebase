import { Component } from '@angular/core';
import { Auth } from 'src/app/types/book';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ngOnInit(): void {}
  constructor(){}
  form : Auth = {
    email : '',
    password : '',
    confirmPassword: ''
  }
  submitRegister(){
    console.log(this.form)
  }
}
