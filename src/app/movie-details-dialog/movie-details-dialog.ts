import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details-dialog',
  standalone: false,
  templateUrl: './movie-details-dialog.html',
  styleUrls: ['./movie-details-dialog.scss']
})
export class MovieDetailsDialog {
    constructor(
 public dialogRef: MatDialogRef<MovieDetailsDialog>,
        @Inject(MAT_DIALOG_DATA) public movie: any
      ) {}
      closeDialog(): void {
        this.dialogRef.close();
      }
}
