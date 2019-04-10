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
            .set('patient', ('ce1b2ab4-6cb6-4483-a96d-d4b26ef54f0e'));

        return this.httpClient.get(url, {
            params
        });
    }
}
