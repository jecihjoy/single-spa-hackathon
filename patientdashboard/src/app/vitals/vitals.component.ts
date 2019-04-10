import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params.patient_uuid) {
        console.log('Fetch Vitals for patient', params.patient_uuid);
      }
    });
  }
  constructor(private activeRoute: ActivatedRoute) {
  }

}
