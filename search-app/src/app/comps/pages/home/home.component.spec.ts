import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { of } from 'rxjs'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material'

import { HomeComponent } from './home.component'
import { FilterByNamePipe } from '../../../pipes/filter-by-name.pipe'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [
        HomeComponent,
        FilterByNamePipe
      ],
      providers: [
        HttpClient,
      ]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

})
