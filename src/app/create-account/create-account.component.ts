import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../authentication/auth.service';
import {Router} from '@angular/router';
import {LoadingService} from '../loading/loading.service';
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
  @ViewChild('f') recordForm: NgForm;

  constructor(private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService) {
  }

  ngOnInit() {
  }

  connexion(emailTyped: string, passwordTyped: string, pass2Typed: string) {
    console.log('recu : ' + this.recordForm.value.emailTyped, + passwordTyped + pass2Typed);
      this.loadingService.isLoading = true;
      this.authService.signup(emailTyped, passwordTyped, pass2Typed);
    
  }

}
