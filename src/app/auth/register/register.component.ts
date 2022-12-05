import { Component } from '@angular/core';
import { Auth } from 'src/app/types/book';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  ngOnInit(): void {}
  constructor(private authService : AuthService){}
  form : Auth = {
    email : '',
    password : '',
    confirmPassword: ''
  }
  submitRegister() {
    if(this.form.password !== this.form.confirmPassword){
      return;
    }
    this.authService.register(this.form);
  }
}
