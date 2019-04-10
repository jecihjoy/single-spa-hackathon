import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutheticationService } from './services/authentication.service';

@Component({
  selector: 'patientdashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'patientdashboard';
  constructor(private autheticationService: AutheticationService,
              private router: Router) {

  }
  ngOnInit(): void {
    const credentials = this.autheticationService.getAuth();
    if (!credentials) {
      this.router.navigateByUrl('/login');
    }

  }
  ngOnDestroy() {
    console.log('destroying patientdashboard');
  }
}
