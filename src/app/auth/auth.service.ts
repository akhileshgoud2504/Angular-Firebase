import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { Auth } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  login(form:Auth){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email,form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
        alert('Login success')
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Login failed')
        console.log(errorCode,errorMessage)
      });
  }

  register(form:Auth){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        console.log(userCredential)
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  constructor() { }
}
