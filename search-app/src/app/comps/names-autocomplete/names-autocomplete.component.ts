import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { debounceTime } from 'rxjs/operators'
import { FormControl } from '@angular/forms'
import { Subject } from 'rxjs'
import { Name } from '../../interfaces/name'
import { NamesService } from '../../services/names.service'

@Component({
  selector: 'app-names-autocomplete',
  templateUrl: './names-autocomplete.component.html',
  styleUrls: ['./names-autocomplete.component.sass']
})
export class NamesAutocompleteComponent implements OnInit {
  @Output() namesEmitter: EventEmitter<any> = new EventEmitter()

  searchTerm: FormControl = new FormControl()
  results: Observable<any[]>

  offset = new Subject<string>()

  constructor(
    private namesService: NamesService,
  ) {
    this.searchTerm.valueChanges
      // pipe through debounce time to lower the calls to the db
      .pipe(
        debounceTime(200)
      )
      .subscribe((term) => {
        // console.log('the term', term)
        // don't fire if there is nothing in the search input
        if (term) {
          this.namesService.getNames(term)
            .subscribe((names: Name[]) => {
              // console.log('got names', names)
              this.namesEmitter.emit(names)
            })
        } else { // if the search input is cleared, emit an empty array
          this.namesEmitter.emit([])
        }
      })
  }

  ngOnInit() {
  }

}
