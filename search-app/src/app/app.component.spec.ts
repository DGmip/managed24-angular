import { TestBed, async } from '@angular/core/testing'
import { of } from 'rxjs'
import { Subject } from 'rxjs'
import { Component } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { SwUpdate } from '@angular/service-worker'
import { MatSnackBar } from '@angular/material'

// todo: test this process properly
const snackbar = {
}

@Component({ selector: 'app-sidenav', template: '' })
class SidenavComponent { }

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SidenavComponent
      ],
      providers: [
        { provide: SwUpdate, useValue: SwUpdate },
        { provide: MatSnackBar, useValue: snackbar },
      ]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
})
