import { HttpErrorResponse } from '@angular/common/http'
import { Error } from '../interfaces/error'
import { throwError } from 'rxjs'

export function handleHttpError(error: HttpErrorResponse) {
  console.log('an error in error handler', error)
  let err: Error
  if (error instanceof HttpErrorResponse) {
    switch (error.status) {
      case 404:
        err = {
          message: 'The resource could not be found.',
          status: error.status,
        }
        return throwError(err)
        break
      case 403:
        err = {
          message: 'You do not have access to this resource',
          status: error.status,
        }
        return throwError(err)
        break
      case 500:
        err = {
          message: 'The server could not complete the request',
          status: error.status,
        }
        return throwError(err)
        break
      case 0:
        err = {
          message: 'The connection to the server was refused - check you are using the correct endpoint. You are currently calling ' + error.url,
          status: error.status,
        }
        return throwError(err)
        break
      case 502:
        err = {
          message: 'The connection to the server was refused - check you are using the correct endpoint. You are currently calling ' + error.url,
          status: error.status,
        }
        return throwError(err)
        break
      default:
        err = {
          message: 'Unknown error: The http error status was not caught',
          status: error.status,
        }
        return throwError(err)
    }
  } else {
    err = {
      message: 'The backend returned an error that is not of type HttpErrorResponse',
      status: 500
    }
    return throwError(err)
    console.error('', error)
  }

  // return an observable with a user-facing error message
  return throwError({ message: 'default error' })
}
