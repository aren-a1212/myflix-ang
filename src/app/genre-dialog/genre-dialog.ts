import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';



/**
 * Dialog component for displaying genre information
 */
@Component({
  selector: 'app-genre-dialog',
  standalone: false,
  templateUrl: './genre-dialog.html',
  styleUrls: ['./genre-dialog.scss']
})
export class GenreDialog {

   /**
   * @param dialogRef - Reference to the dialog container
   * @param genre - Genre data to display (injected)
   */
constructor(
  public dialogRef: MatDialogRef<GenreDialog>,
      @Inject(MAT_DIALOG_DATA) public genre: {
        name: string;
        description: string
      }
    ) {}
  /** Closes the dialog */
    closeDialog(): void{
      this.dialogRef.close();
    }
}
