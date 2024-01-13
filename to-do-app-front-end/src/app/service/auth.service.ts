import { Injectable } from '@angular/core';
import {Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User} from "@angular/fire/auth";

@Injectable()
export class AuthService {

  private user: User | null = null;
  constructor(auth:Auth) {
    authState(auth).subscribe(user => {
      this.user = user;
    });
  }

  getPrincipal() {
    return this.user;
  }
}
