import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  Login() {
    this._authenticationService.login();
  }
  Logout() {
    this._authenticationService.logout();
  }

}
