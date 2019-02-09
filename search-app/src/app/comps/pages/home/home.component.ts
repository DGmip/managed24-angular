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
  ) { }

  ngOnInit() {
    this.getNames()
  }

  getNames(): void {
    this.namesService.getNames()
      .subscribe((names: Name[]) => {
        console.log('names', names)
        this.names = names
      })
  }

  removeName(n: Name): void {
    const id = n._id
    console.log('removing by name', id)
  }

  search(): void {
  }
}
