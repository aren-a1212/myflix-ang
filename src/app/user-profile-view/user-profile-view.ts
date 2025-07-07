import { Component, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DirectorDialog } from '../director-dialog/director-dialog';
import { MovieDetailsDialog } from '../movie-details-dialog/movie-details-dialog';
import { GenreDialog } from '../genre-dialog/genre-dialog';





@Component({
  selector: 'app-user-profile-view',
  standalone: false,
  templateUrl: './user-profile-view.html',
  styleUrls: ['./user-profile-view.scss']
})
export class UserProfileView implements OnInit   {
@Input() user: any = {};

@Input() birthday :string= '';

@Input() firstName: string = '';

@Input() lastName: string = '';

favoriteMovies : any[] = [];





constructor(
  public fetchApiData: FetchApiDataService,
public snackBar : MatSnackBar,
public dialog: MatDialog,
public router: Router
) {}

ngOnInit(): void {
    this.getUserData();
}
get displaybirthday() {
  return this.birthday;
}
set displaybirthday(v) {
this.user.birthday = v; 
}
getUserData(): void {
  const localUser : string| null= localStorage.getItem('user');

  if (!localUser){
    this.router.navigate(['/welcome']);
    return;
  }
 const parsedUser: any = JSON.parse(localUser);
    this.fetchApiData.getUser().subscribe((result) => {
       console.log('👤 fetched user:', result);
      this.user = result;
      delete this.user.password;
      this.birthday = new Date(this.user.birthday).toLocaleDateString();
      localStorage.setItem('user', JSON.stringify(result));
      this.getFavoriteMovies();
    });
  }
 updateUser(): void {
  console.log('Updating user:', this.user);
    this.fetchApiData.editUser(this.user).subscribe(
      (result) => {
        this.snackBar.open('Update successful', 'OK', {
          duration: 2000,
        });
        this.fetchApiData.getUser().subscribe((result) => {
          this.user = result;
          delete this.user.password;
          localStorage.setItem('user', JSON.stringify(result));
        });
      },
      (result) => {
        this.snackBar.open('Update failed' + result, 'OK', {
          duration: 2000,
        });
      }
    );
  }
      /**
   * 
   * @return The favorite movies
   */
  getFavoriteMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      const allMovies: any[] = resp;
      this.favoriteMovies = allMovies.filter((movie) =>
        this.user.favoriteMovies.includes(movie._id)
      );
      return this.favoriteMovies;
    });
  }
      /**
  * Handler to remove a movie from user favorites
   * @param movieId The movie id to remove from user favorites
   */
  removeFavorite(movieId: string): void {

   this.fetchApiData.deleteFavoriteMovie(movieId).subscribe({
    next: (updatedUser) => {
      this.snackBar.open('Movie removed from favorites', 'OK', { duration: 2000 });
      // Update your local user and re-filter the favorites list
      this.user = updatedUser;
      localStorage.setItem('user', JSON.stringify(updatedUser));
      this.getFavoriteMovies();  
    },
    error: (err) => {
      this.snackBar.open('Could not remove movie from favorites', 'OK', { duration: 2000 });
    }
  });
}
  

      
 /**
 * Method to open the dialog with informations about a director
 * @param director The director information
 */
openDirectorDialog(director: any): void {
   const moviesByDirector = this.favoriteMovies.filter(
      (m: any) => m.director.name === director.name
    );
  this.dialog.open(DirectorDialog, {
    width: '400px',
    data:{
      director,
      movies :moviesByDirector
    }
  });
}

/**
 * Method to open the dialog with informations about a genre
 * @param genre The genre information
 */
openGenreDialog(genre: any): void {
  this.dialog.open(GenreDialog, {
    width: '400px',
    data: genre
  });
}

/**
 * Method to open the dialog with informations about a movie
 * @param movie The movie information
 */
openMovieDetailsDialog(movie: any): void {
  this.dialog.open(MovieDetailsDialog, {
    width: '400px',
    data: movie
  });
}
}