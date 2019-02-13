import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Name } from '../interfaces/name'
import { of } from 'rxjs'
import { catchError } from 'rxjs/operators'
import * as environment from '../../environments/environment'
import { handelHttpError } from '../helpers/http-error-handler'

const endpoint = environment.environment.endpoint

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(
    private http: HttpClient,
  ) { }

  getNames(): Observable<any> {
    const url = endpoint + '/names'
    console.log('getting names in service', url)
    return this.http.get<Name[]>(url)
      // .pipe(
      //   catchError(handelHttpError)
      // )
  }

}
