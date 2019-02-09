import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Name } from '../interfaces/name'
import { of, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import * as environment from '../../environments/environment'

const endpoint = environment.environment.endpoint

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor(
    private http: HttpClient,
  ) { }

  private handleError(error: HttpErrorResponse) {
    console.log('an error in error handler', error)
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 404:
          console.log('returning 404')
          return throwError({ 'message': '404' })
          break
        default:
      }
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error('The backend returned an error that is not of type HttpErrorResponse', error)
    }
    // return an observable with a user-facing error message
    return throwError({message: 'default error'})
  }

  getNames(): Observable<any> {
    console.log('getting names in service')
    const url = endpoint + '/names'
    return this.http.get<Name[]>(url)
      .pipe(
        catchError(this.handleError)
      )
  }

}
