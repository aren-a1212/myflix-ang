import { Component } from '@angular/core';
import { UserRegistrationForm } from './user-registration-form/user-registration-form';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginForm } from './user-login-form/user-login-form';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'myFlix-angular';

  constructor(public dialog: MatDialog){}
  openUserRegistrationDialog(): void{
    this.dialog.open(UserRegistrationForm, {
      width:'280px'
    });
  }
  openUserLoginDialog(): void{
    this.dialog.open(UserLoginForm, {
      width:'280px'
    });
  }
}
