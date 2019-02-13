import { TestBed, inject, getTestBed } from '@angular/core/testing'
import { Observable } from 'rxjs/internal/Observable'
import { of } from 'rxjs'
import { asyncData, asyncError } from '../helpers/async-observable-helpers'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { Name } from '../interfaces/name'
import { NamesService } from './names.service'
import { environment } from '../../environments/environment'
import { names } from '../helpers/test-names'

const endpoint = environment.endpoint

describe('NamesService', () => {
  let service: NamesService
  let httpClientSpy: { get: jasmine.Spy }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = new NamesService(<any>httpClientSpy)
  })


  it('should return expected names:Name[] (HttpClient called once)', () => {
    const expectedNames: Name[] = names

    httpClientSpy.get.and.returnValue(asyncData(expectedNames))

    service.getNames('milly').subscribe(
      data => expect(data).toEqual(expectedNames, 'expected names'),
      fail
    )
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call')
  })

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    })

    httpClientSpy.get.and.returnValue(asyncError(errorResponse))

  })

})
