import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import * as M from "materialize-css/dist/js/materialize";
import { UserService } from "./user.service";
import { Observable } from "rxjs";


@Injectable()
export class AuthService {
  authState: any = null;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private user: UserService
  ) {
    this.afAuth.authState.subscribe(auth => {
      this.authState = auth;
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : "";
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return "Guest";
    } else {
      return this.authState["displayName"] || "User without a Name";
    }
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.authState = credential.user;
        this.router.navigate(["/"]);
      })
      .catch(error => {
        console.log(error);
        M.toast({ html: error.message });
      });
  }

  //// Email/Password Auth ////
  emailSignUp(email: string, password: string, author: any) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        author.userId =  user.user.uid;
        this.user.createAuthor(author);
        this.router.navigate(["/"]);
      })
      .catch(error => {
        console.log(error);
        M.toast({ html: error.message });
      });
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user;
        this.router.navigate(["/"]);
      })
      .catch(error => {
        console.log(error);
        M.toast({ html: error.message });
      });
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    var auth = firebase.auth();

    return auth
      .sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch(error => console.log(error));
  }

  //// Sign Out ////
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(["/"]);
  }
}
