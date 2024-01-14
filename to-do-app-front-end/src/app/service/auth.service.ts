import { Injectable } from '@angular/core';
import {Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AuthService {

  private initialized = false;
  private userSubject = new BehaviorSubject<User | null|undefined >(undefined)
  constructor(private auth:Auth ,private routerService: Router) {
    authState(auth).subscribe(user => {
      this.initialized = true;
      this.userSubject.next(user);
    });
  }

  signIn() {
    return  signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  isInitialized() {
    return this.initialized;
  }

  getPrincipal(){
    return this.userSubject.asObservable();
  }

  signOut() {
    return signOut(this.auth);
  }
}
