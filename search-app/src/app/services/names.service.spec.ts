import { TestBed, inject, getTestBed } from '@angular/core/testing'
import { Observable } from 'rxjs/internal/Observable'
import { of, isObservable } from 'rxjs'
import { asyncData, asyncError } from '../helpers/async-observable-helpers'
import { HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController, RequestMatch } from '@angular/common/http/testing'
import { Name } from '../interfaces/name'
import { NamesService } from './names.service'
import { environment } from '../../environments/environment'
import { names } from '../helpers/test-names'

const endpoint = environment.endpoint
const apiKey = environment.apiKey

describe('NamesService', () => {
  let httpTestingController: HttpTestingController
  let httpClientSpy: { get: jasmine.Spy } // spy on the get to test 404 etc
  let service: NamesService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NamesService],
      imports: [HttpClientTestingModule]
    })
    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.get(NamesService)
    // service = new NamesService(<any> httpClientSpy)
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return milly', () => {
    const expectedResult: Observable<Name[]> = of(names)

    service.getNames('milly')
      .subscribe((data) => {
        console.log('the data', data)
        expect(isObservable(data))
      })
    const url = 'http://localhost:4000/names?apiKey=d25d81b8-9986-4202-80da-b33a6c233580&search=milly'
    const testRequest = httpTestingController.expectOne(url)

    expect(testRequest.request.method).toBe('GET')

    testRequest.flush(expectedResult)
  })

  it('should error on 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    })
    httpClientSpy.get.and.returnValue(asyncError(errorResponse))
    service.getNames('milly')
      .subscribe(
        data => fail('Should have errored with 404'),
        error => {
          console.log('oops, sorry', error)
        }
      )
  })


})
