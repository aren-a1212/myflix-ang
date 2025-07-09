import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService,  } from '../fetch-api-data';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * User registration form component
 */


@Component({
  selector: 'app-user-registration-form',
  standalone: false,
  templateUrl: './user-registration-form.html',
  styleUrls: ['./user-registration-form.scss']
})
export class UserRegistrationForm implements OnInit {
 /** User data input for registration */
@Input() userData= {username: '', password: '', email: '', firstName: '',
  lastName: '', birthday:''};

 /**
   * @param FetchApiData - API service
   * @param dialogRef - Dialog reference
   * @param snackBar - Notification service
   */


constructor(
  public FetchApiData:FetchApiDataService,
  public dialogRef: MatDialogRef<UserRegistrationForm>,
  public snackBar: MatSnackBar) {}
  ngOnInit(): void{

  }

 /** Registers user and handles response */
  registerUser(): void{
    this.FetchApiData.userRegistration(this.userData).subscribe((Response)=>{
      localStorage.setItem('username', Response.user.username);

      this.dialogRef.close();
      console.log(Response);
      this.snackBar.open('user registered', 'OK', {
        duration: 2000
      });
    },(Response)=>{
      console.log(Response);
      this.snackBar.open(Response, 'OK' , {
        duration:2000
      });
    });
  }
}
