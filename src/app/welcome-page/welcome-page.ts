import { Component, OnInit } from '@angular/core';
import { UserLoginForm } from '../user-login-form/user-login-form';
import { UserRegistrationForm } from '../user-registration-form/user-registration-form';
import { MatDialog } from '@angular/material/dialog';
import { MovieCard } from '../movie-card/movie-card';


/**
 * Welcome page component handling user authentication dialogs
 */
@Component({
  selector: 'app-welcome-page',
  standalone: false,
  templateUrl: './welcome-page.html',
  styleUrls: ['./welcome-page.scss']
})
export class WelcomePage implements OnInit {
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
  }
    /** Opens user registration dialog */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationForm, {
      width: '280px'
    });
  }
   /** Opens user login dialog */
openUserLoginDialog(): void {
    this.dialog.open(UserLoginForm, {
      width: '280px'
    });
  }
   /** Opens movie details dialog */
  openMovieDialog():void{
    this.dialog.open(MovieCard, {
      width:'500px'
    });
  }
}