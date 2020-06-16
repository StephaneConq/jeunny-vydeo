import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {auth, User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  qAuthResolve;
  qAuth: Promise<boolean> = new Promise(resolve => this.qAuthResolve = resolve);
  user: User;

  constructor(public  afAuth: AngularFireAuth, public  router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        this.qAuthResolve(true);
      } else {
        this.qAuthResolve(false);
        this.router.navigate(['login']);
      }
    })
  }

  async loginWithGoogle() {
    await this.afAuth.signInWithPopup(new auth.GoogleAuthProvider())
    await this.router.navigate(['']);
  }

  logout(){
    this.afAuth.app.then(value => value.auth().signOut().then(() => this.router.navigate(['login'])));
  }
}
