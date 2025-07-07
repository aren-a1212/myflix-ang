import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss']
})
export class App {
  protected title = 'myFlix-angular';
  isLoggedIn: boolean = false;

  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        const user = localStorage.getItem('user');
        this.isLoggedIn = !!user;
      }
    })
  }

  /**
   * Method to logout a user
   */
  logout(): void {
    // clear local storage
    localStorage.clear();

    //redirect to welcome page
    this.router.navigate(['welcome']);
  }
}
