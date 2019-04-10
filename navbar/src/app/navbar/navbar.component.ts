import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/*<!-- Grey with black text -->
<nav class="navbar navbar-expand-sm bg-light navbar-light">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" routerLink="/">HOME</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/patientsearch">PATIENT SEARCH</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/login">PATIENT DASHBOARD</a>
    </li>
  </ul>
</nav>*/