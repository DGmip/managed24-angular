import { Component, OnInit } from '@angular/core'
import { take } from 'rxjs/operators'
import { ActivatedRoute, Params, Router, NavigationEnd } from '@angular/router'
import { SwUpdate } from '@angular/service-worker'
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(
    private swUpdate: SwUpdate,
    private snackbar: MatSnackBar,
  ) {
    if (swUpdate.isEnabled) {
      swUpdate.checkForUpdate()
      swUpdate.available.subscribe(evt => {
        window.location.reload()
        const snack = this.snackbar.open('Update Available', 'Install')
        snack
          .onAction()
          .subscribe(() => {
            // send to updates page
            window.location.reload()
          })
        snack._dismissAfter(30000)
      })
    } else {
      console.warn('swUpdate is not enabled')
    }
  }

}
