import { HttpErrorResponse } from '@angular/common/http'

export interface Error {
  message: string
  status: number
  error?: HttpErrorResponse
}
