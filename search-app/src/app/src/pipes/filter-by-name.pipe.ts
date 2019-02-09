import { Pipe, PipeTransform } from '@angular/core'
import { Name } from '../../interfaces/name'

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(names: Name[], searchString: string): Name[] {
    console.log('names', names)
    console.log('searchstring', searchString)
    if (names && searchString) {
      const filtered = names.filter((name: Name) => {
        const lowercaseName = name.name.toLowerCase()
        console.log('lowercas name', lowercaseName)
        return lowercaseName.includes(searchString)
      })
      return filtered
    }
    return names
  }

}
