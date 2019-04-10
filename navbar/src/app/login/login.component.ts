import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public login(event, username: string, password: string) {
    console.log("called again");
    event.preventDefault();

    this.authenticationService.authenticate(username, password)
      .subscribe(
        (response: any) => {
          const data = response;

          if (data.authenticated) {
            console.log("auth successful");
            this.router.navigateByUrl('/patientsearch');
          } else {
          }

        }
      )
  }

}
