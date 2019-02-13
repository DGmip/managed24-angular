import { Component, OnInit } from '@angular/core'
import { NamesService } from '../../../services/names.service'
import { Name } from '../../../interfaces/name'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  names: Name[]
  searchTerm: string

  constructor(
    private namesService: NamesService,
  ) {
  }

  ngOnInit() {
    this.getNames()
  }

  // get all the names from the db
  getNames(): void {
    this.namesService.getNames()
      .subscribe((names: Name[]) => {
        // console.log('got names in component', names)
        this.names = names
      }, (error) => {
        // console.error('errored in component', error.error)
      })
  }

  // remove name function for future dev
  removeName(n: Name): void {
    const id = n._id
    // console.log('todo: removing by name', id)
  }

}
