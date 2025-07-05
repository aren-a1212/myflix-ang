import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService,  } from '../fetch-api-data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration-form',
  standalone: false,
  templateUrl: './user-registration-form.html',
  styleUrls: ['./user-registration-form.scss']
})
export class UserRegistrationForm implements OnInit {

@Input() userData= {Username: '', Password: '', Email: '', Birthday:''};

constructor(
  public FetchApiData:FetchApiDataService,
  public dialogRef: MatDialogRef<UserRegistrationForm>,
  public snackBar: MatSnackBar) {}
  ngOnInit(): void{

  }


  registerUser(): void{
    this.FetchApiData.userRegistration(this.userData).subscribe((Response)=>{
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
