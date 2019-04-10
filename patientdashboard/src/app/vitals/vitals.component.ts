import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VitalsService } from '../services/vitals.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
  vitals: any;
  ngOnInit(): void {
    this.activeRoute.parent.params.subscribe(params => {
      if (params.patient_uuid) {
        console.log('Fetch Vitals for patient', params.patient_uuid);
        this.vitalsService.fetchVitals(params.patient_uuid).subscribe((res: any) => {
          console.log('Vitals', res);
          this.vitals = res.result;
        });
      }
    });
  }
  constructor(private activeRoute: ActivatedRoute, private vitalsService: VitalsService) {
  }

}
