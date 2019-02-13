import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Component } from '@angular/core'

import { AboutComponent } from './about.component'

@Component({selector: 'mat-divider', template: ''})
class MatDividerComponent {}

describe('AboutComponent', () => {
  let component: AboutComponent
  let fixture: ComponentFixture<AboutComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        MatDividerComponent
      ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
