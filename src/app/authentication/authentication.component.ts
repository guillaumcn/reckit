import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import { toast } from 'angular2-materialize';
import {LoadingService} from "../loading/loading.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {

  // créé sur Firebase
  emailTyped = 'reckit.projet@gmail.com';
  passwordTyped = 'mini-projet';

  constructor(private authService: AuthService,
              private router: Router,
              private loadingService: LoadingService) {
  }

  ngOnInit() {
  }

  connexion() {
    this.loadingService.isLoading = true;
    this.authService.emailLogin(this.emailTyped, this.passwordTyped).then(() => {
        if (this.authService.authenticated) {
          this.router.navigate(['/records']);
          this.loadingService.isLoading = false;
          toast('Connexion réussie', 3000);
        }
      }
    )
    ;
  }
}
