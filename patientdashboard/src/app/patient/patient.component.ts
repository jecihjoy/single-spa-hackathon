import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  patient: any;
  constructor(private activeRoute: ActivatedRoute, private patientService: PatientService) {
    this.activeRoute.params.subscribe(params => {
      if (params.patient_uuid) {
        console.log('Fetch Patient with', params.patient_uuid);
        this.patientService.fetchpatient('ce1b2ab4-6cb6-4483-a96d-d4b26ef54f0e').subscribe((patient) => {
          this.patient = patient;
        });
      }
    });

  }
}

