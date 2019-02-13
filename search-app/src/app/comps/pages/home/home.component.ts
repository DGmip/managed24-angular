import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/internal/Observable'
import { Subject } from 'rxjs'
import { NamesService } from '../../../services/names.service'
import { Name } from '../../../interfaces/name'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  title: string = 'Searchable list of names'

  names: Name[]

  constructor() { }

  setNames(names: any): void {
    console.log('setting names', names)
    this.names = names
  }

  ngOnInit() {
  }

}
