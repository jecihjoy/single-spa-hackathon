import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AutheticationService } from './authentication.service';
import { Router } from '@angular/router';
@Injectable()
export class PocHttpInteceptor implements HttpInterceptor {
  constructor(private autheticationService: AutheticationService, private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const credentials = this.autheticationService.getAuth();
    let modifiedReq = req;
    if (credentials) {
      const authHeader = { Authorization: 'Basic ' + credentials };
      modifiedReq = req.clone({ setHeaders: authHeader });
    } else {
      this.router.navigateByUrl('/login');
    }
    return next.handle(modifiedReq).pipe(tap(event => {
      if (event instanceof HttpResponse) {
        // do stuff with response here
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        return observableThrowError(err);
      }
    }));
  }
}
