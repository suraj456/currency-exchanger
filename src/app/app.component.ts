import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AUTHENTICATED } from './components/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-exchanger';
  constructor(private router : Router){
    const auth = sessionStorage.getItem(AUTHENTICATED)
    if (!auth) this.router.navigate(['login'])
  }
}
