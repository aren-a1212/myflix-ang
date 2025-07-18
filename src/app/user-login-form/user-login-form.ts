import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data';
import { Router } from '@angular/router';



/**
 * User login view component
 */

@Component({
  selector: 'app-user-login-form',
  standalone: false,
  templateUrl: './user-login-form.html',
  styleUrls: ['./user-login-form.scss']
})
export class UserLoginForm implements OnInit {
  @Input() userData= {username : '', password: ''};
   /**
   * @param FetchApiData - API service
   * @param dialogRef - Dialog reference
   * @param snackBar - Notification service
   * @param router - Navigation service
   */
  constructor(
    public FetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginForm>,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}
  ngOnInit(): void {
  }

  /** Authenticates user and handles response */
  loginUser(): void {
    this.FetchApiData.userLogin(this.userData).subscribe((result)=>{
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.token);
      localStorage.setItem('username', result.user.username);
     // Close dialog and navigate
      this.dialogRef.close();
      this.snackBar.open('Login Succesful', 'OK', {
        duration : 2000,
      });
      this.router.navigate(['movies']);
    }, (result)=>{
      this.snackBar.open('Login failed -'+ result, 'OK', {
        duration: 2000
      });
    });
  }
}

