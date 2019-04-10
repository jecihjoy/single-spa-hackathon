import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  patient: any;
  constructor(private activeRoute: ActivatedRoute, private patientService: PatientService) {
  }
  ngOnInit(): void {
    this.activeRoute.parent.params.subscribe(params => {
      if (params.patient_uuid) {
        console.log('Fetch Patient with', params.patient_uuid);
        this.patientService.fetchpatient(params.patient_uuid).subscribe((patient) => {
          this.patient = patient;
        });
      }
    });

  }
}
