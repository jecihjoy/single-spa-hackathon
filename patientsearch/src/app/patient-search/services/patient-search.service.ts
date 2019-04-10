import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientSearchService {
  public apiURL = 'https://ngx.ampath.or.ke/amrs/ws/rest/v1/patient';
  public searchString: string = '';
  public v: string = 'custom:(uuid,display,' +
  'identifiers:(identifier,uuid,preferred,location:(uuid,name),' +
  'identifierType:(uuid,name,format,formatDescription,validator)),' +
  'person:(uuid,display,gender,birthdate,dead,age,deathDate,birthdateEstimated,' +
  'causeOfDeath,preferredName:(uuid,preferred,givenName,middleName,familyName),'
  + 'attributes,preferredAddress:(uuid,preferred,address1,address2,cityVillage,longitude,' +
  'stateProvince,latitude,country,postalCode,countyDistrict,address3,address4,address5' +
  ',address6)))';
  public patientSearchResults: BehaviorSubject<[]> = new BehaviorSubject<[]>([]);

  public mockPatient = [
    {
      display: '1234567 - Test Patient',
      uuid: '4afa1b3f-5cfb-418d-8de9-3dc3c63b24f4',
      person: {
        age: 30,
        attributes: [],
        birthdate: '1988-10-07T00:00:00.000+0300',
        birthdateEstimated: false,
        causeOfDeath: false,
        dead: false,
        deathDate: null,
        display: 'Test Patient',
        gender: 'F',
        preferredAddress: null,
        preferredName: {
          familyName: 'Patient',
          givenName: 'Test',
          middleName: '',
          preferred: true,
          uuid: '4ff2b555-5c7e-412f-ac2c-5d6487c2f12f'
        }
      },
      identifiers: [
        { 
          identifier: '1234567', 
          identifierType: {
            name: 'KENYAN NATIONAL ID NUMBER',
            uuid: 'c2927b3f-82a8-4dcf-915f-1373dddad868'
          },
          location: {
            name: 'Location Test',
            uuid: '9d30226a-dbcf-4214-8427-488a467a208d'
          },
          preferred: true,
          uuid: 'c7d14bbf-ff32-4993-8f93-88f2a2ea4b6c'
        }
      ]
    }
  ]

  constructor(protected http: HttpClient) { }

  public getUrl(): string {
    // construct appropriate URL from appSettingService
    return this.apiURL;
  }

  public searchPatient(searchText: string, v: string = null): Observable<any> {
    if (searchText) {
      searchText = searchText.trim();
    }
    console.log('searching for: ', searchText);
    const url = this.getUrl();
    const params: HttpParams = new HttpParams()
      .set('q', searchText)
      .set('v', (v && v.length > 0) ? v : this.v);
    // if (searchText === 'Test Patient') {
    //   return of(this.mockPatient);
    // } else {
    //   return of([]);
    // }
    return this.http.get(url, { params: params }).pipe(
      map((response: any) => {
        return response.results;
      }));
  }

  public getPatientByUuid(uuid: string, v: string = null): Observable<any> {
    let url = this.getUrl();
    url += '/' + uuid;

    const params: HttpParams = new HttpParams()
      .set('v', (v && v.length > 0) ? v : this.v);

    return this.http.get(url, {params: params});
  }

  public resetPatients() {
    this.patientSearchResults.next([]);
  }
}
