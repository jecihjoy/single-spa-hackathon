import { Component, OnDestroy, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css']
})
export class EncountersComponent implements OnInit {
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params.patient_uuid) {
        console.log('Fetch Encounters for patient', params.patient_uuid);
      }
    });
  }
  constructor(private activeRoute: ActivatedRoute) {
  }
}
