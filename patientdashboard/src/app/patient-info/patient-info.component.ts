import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params.patient_uuid) {
        console.log('Fetch Patient info for patient', params.patient_uuid);
      }
    });
  }
  constructor(private activeRoute: ActivatedRoute) {
  }
}
