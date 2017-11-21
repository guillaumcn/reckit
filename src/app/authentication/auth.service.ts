import {Injectable} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {LoadingService} from '../loading/loading.service';
import {ToastService} from '../toast.service';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router,
              private loadingService: LoadingService, private toastService: ToastService) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {

      })
      .catch(err => {

      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/records']);
        this.loadingService.isLoading = false;
        this.toastService.toast('Connexion réussie');
      })
      .catch(err => {

      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(value => {
      this.router.navigate(['/authentication']);
      this.toastService.toast('Deconnexion réussie');
    }, err => {

    });
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

}
