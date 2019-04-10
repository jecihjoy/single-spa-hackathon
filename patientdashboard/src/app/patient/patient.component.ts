import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe(params => {
      if (params.patient_uuid) {
        console.log('Fetch Patient with', params.patient_uuid);
      }
    });

  }
}

