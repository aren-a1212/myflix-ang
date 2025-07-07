import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-director-dialog',
  standalone: false,
  templateUrl: './director-dialog.html',
  styleUrls: ['./director-dialog.scss']
})
export class DirectorDialog {
  // If you like, you can pull these out onto fields
  director: any;
  movies: any[];

  constructor(
    private dialogRef: MatDialogRef<DirectorDialog>,
    @Inject(MAT_DIALOG_DATA) data: { director: any, movies: any[] }
  ) {
    this.director = data.director;
    this.movies   = data.movies;
  }

  close(): void {
    this.dialogRef.close();
  }
}
