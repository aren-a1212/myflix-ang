import { Component, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';




/**
 * Dialog component for displaying movie details
 */
@Component({
  selector: 'app-movie-details-dialog',
  standalone: false,
  templateUrl: './movie-details-dialog.html',
  styleUrls: ['./movie-details-dialog.scss']
})
export class MovieDetailsDialog {
   /**
   * @param dialogRef - Reference to the dialog container
   * @param movie - Movie data to display (injected)
   */
    constructor(
 public dialogRef: MatDialogRef<MovieDetailsDialog>,
        @Inject(MAT_DIALOG_DATA) public movie: any
      ) {}
        /** Closes the dialog */
      closeDialog(): void {
        this.dialogRef.close();
      }
}
