import {Injectable} from '@angular/core';

import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {LoadingService} from '../loading/loading.service';
import {ToastService} from '../toast.service';
import { Location } from '@angular/common';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  location: Location;
  

  constructor(private firebaseAuth: AngularFireAuth, private router: Router,
              private loadingService: LoadingService, private toastService: ToastService) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          if (user.displayName != null) {
            this.toastService.toast('Connecté en tant que ' + user.displayName);
          } else {
            this.toastService.toast('Connecté en tant que ' + user.email);
          }
        } else {
          this.userDetails = null;
          this.toastService.toast('Déconnecté');
        }
      }
    );
  }

  //ajout d'une condition : il faut que les deux passsword entrés soient les mêmes
  signup(email: string, password: string, pass2: string) {
    if (password === pass2){
      this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.login(email, password);
        this.loadingService.isLoading = false;
        this.router.navigate(['/records']);
        this.toastService.toast('Compte ' + email + ' créé !');
      })
      .catch(err => {
        this.loadingService.isLoading = false;
      });
    } else {
      this.location.replaceState('/'); // clears browser history so they can't navigate with back button
      this.toastService.toast('Les deux mots de passe renseignés sont différents');
      this.router.navigate(['/authentication']);
    }
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.router.navigate(['/records']);
        this.loadingService.isLoading = false;
      })
      .catch(err => {
        this.loadingService.isLoading = false;
      });
  }

  signInWithGoogle() {
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(value => {
      this.loadingService.isLoading = false;
      this.router.navigate(['/records']);
    }).catch(err => {
      this.loadingService.isLoading = false;
    });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut().then(value => {
      this.router.navigate(['/authentication']);
    }, err => {});
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

}
