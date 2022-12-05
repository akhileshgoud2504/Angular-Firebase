import { Component } from '@angular/core';
import { Auth } from 'src/app/types/book';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
  submitRegister() {
    if(this.form.password !== this.form.confirmPassword){
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}
