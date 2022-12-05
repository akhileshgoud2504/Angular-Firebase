import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { Auth } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
  ngOnInit(): void {
  }
  constructor (private router: Router){}
  isAuthenticated = false;

  login(form:Auth){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email,form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
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

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.isAuthenticated = false;
      this.router.navigate(['login']);
    }).catch((error) => {
      // An error happened.
    });
  }
}
