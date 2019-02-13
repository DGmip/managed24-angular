import { Component } from '@angular/core'
import { names } from '../../helpers/test-names'
import { Name } from '../../interfaces/name'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { NamesAutocompleteComponent } from './names-autocomplete.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { NamesService } from '../../services/names.service'

@Component({ selector: 'mat-form-field', template: '' })
class MatFormFieldStub {
}

const namesServiceStub = {
  getNames: function(searchTerm: string): Name[] {
    return names
  }
}

describe('NamesAutocompleteComponent', () => {
  let component: NamesAutocompleteComponent
  let fixture: ComponentFixture<NamesAutocompleteComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        NamesAutocompleteComponent,
        MatFormFieldStub,
      ],
      providers: [
        { provide: NamesService, useValue: namesServiceStub },
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesAutocompleteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
