import { Component, OnDestroy, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncountersService } from '../services/encounters.service';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.css']
})
export class EncountersComponent implements OnInit {
  encounters: any;
  constructor(private activeRoute: ActivatedRoute, private encountersService: EncountersService) { }

  ngOnInit(): void {
    this.activeRoute.parent.params.subscribe(params => {
      console.log('Params', params);
      if (params.patient_uuid) {
        console.log('Encounters', params);
        this.encountersService.fetchEncounters(params.patient_uuid).subscribe((res: any) => {
          this.encounters = res.results;
        });
      }
    });
  }
}
