import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {LoadingService} from '../../loading/loading.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  emailTyped: string;
  passwordTyped: string;
  pass2Typed: string;

  constructor(private authService: AuthService,
    private loadingService: LoadingService) {
  }

  ngOnInit() {
  }

  createAccount() {
    // En fait le [(ngModel)]="emailTyped" va faire que quoiqu'il arrive la valeur de ton
    // input coté html sera la meme que la valeur de this.emailTyped dans le typescript

    // Donc t'as pas besoin de les passer dans les paramètres de la fonction

      this.loadingService.isLoading = true;
      this.authService.signup(this.emailTyped, this.passwordTyped, this.pass2Typed);
  }

}
