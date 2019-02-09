import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Name } from '../interfaces/name'
import * as environment from '../../environments/environment'

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
    return this.http.get(url)
  }

}
