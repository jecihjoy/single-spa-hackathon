import { Injectable } from '@angular/core';

import { Constants } from './constants';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class EncountersService {
    v = 'default';
    constructor(private httpClient: HttpClient) { }
    fetchEncounters(patientUuid) {
        let url =  Constants.baseOpenmrsURL;
        url += '/encounter';

        const params: HttpParams = new HttpParams()
            .set('v', (this.v))
            .set('patient', (patientUuid));

        return this.httpClient.get(url, {
            params
        });
    }
}
