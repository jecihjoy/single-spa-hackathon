import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'patientdashboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'patientdashboard';
  ngOnDestroy() {
    console.log('destroying patientdashboard')
  }
}
