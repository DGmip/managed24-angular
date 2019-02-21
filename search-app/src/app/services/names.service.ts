import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { Observable } from 'rxjs/internal/Observable'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Name } from '../interfaces/name'
import { of } from 'rxjs'
import { catchError } from 'rxjs/operators'
import * as environment from '../../environments/environment'
import { handleHttpError } from '../helpers/http-error-handler'

const endpoint = environment.environment.endpoint
const apiKey = environment.environment.apiKey

@Injectable({
  providedIn: 'root'
})
export class NamesService {
  constructor(
    private http: HttpClient,
  ) { }

  getNames(searchTerm: string): Observable<any> {

    if (!searchTerm) {
      return of({ message: 'You need to pass a searchTerm to this function' })
    }

    const url = `${ endpoint }/names?apiKey=${ apiKey }&search=${ searchTerm }`
    const formatedURL = encodeURI(url)
    console.log('getting names in service', formatedURL)

    return this.http.get<Name[]>(formatedURL)
      .pipe(
        catchError(handleHttpError)
      )
  }

  // get all the names in the collection
  // getAllNames(): Observable<any> {
  //   const url = endpoint + '/names'
  //   console.log('getting names in service', url)
  //   return this.http.get<Name[]>(url)
  //     .pipe(
  //       catchError(handelHttpError)
  //     )
  // }

}
