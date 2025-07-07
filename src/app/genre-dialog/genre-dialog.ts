import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-genre-dialog',
  standalone: false,
  templateUrl: './genre-dialog.html',
  styleUrls: ['./genre-dialog.scss']
})
export class GenreDialog {
constructor(
  public dialogRef: MatDialogRef<GenreDialog>,
      @Inject(MAT_DIALOG_DATA) public genre: {
        name: string;
        description: string
      }
    ) {}

    closeDialog(): void{
      this.dialogRef.close();
    }
}
