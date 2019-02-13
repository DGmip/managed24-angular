import { HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs'

export function handelHttpError(error: HttpErrorResponse) {
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
    console.error('The backend returned an error that is not of type HttpErrorResponse', error)
  }

  // return an observable with a user-facing error message
  return throwError({ message: 'default error' })
}
