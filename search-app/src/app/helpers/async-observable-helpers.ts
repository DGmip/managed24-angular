import { defer } from 'rxjs'
import { Observable } from 'rxjs/internal/Observable'

export function asyncData<T>(data: T): Observable<any> {
  return defer(() => Promise.resolve(data))
}

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject))
}
