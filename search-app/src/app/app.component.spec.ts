import { TestBed, async } from '@angular/core/testing'
import { Component } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'

@Component({selector: 'app-sidenav', template: ''})
class SidenavComponent {}

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
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
})
