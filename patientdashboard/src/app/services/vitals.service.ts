import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constants } from './constants';

@Injectable()
export class VitalsService {
    v = '';
    constructor(private httpClient: HttpClient) { }
    fetchVitals(patientUuid) {
        let url =  Constants.baseETLURL;
        url += '/patient/' + 'ce1b2ab4-6cb6-4483-a96d-d4b26ef54f0e';

        const params: HttpParams = new HttpParams()
            .set('startIndex', ('0'))
            .set('limit', ('10'));

        return this.httpClient.get(url, {
            params
        });
    }
}
