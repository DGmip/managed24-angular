import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'

import { HomeComponent } from './home.component'
import { FilterByNamePipe } from '../../../src/pipes/filter-by-name.pipe'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
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
