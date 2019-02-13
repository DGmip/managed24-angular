import { Pipe, PipeTransform } from '@angular/core'
import { Name } from '../interfaces/name'

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(names: Name[], searchString: string): Name[] {
    console.log('names', names)
    console.log('searchstring', searchString)
    if (names && searchString) {
      const filtered = names.filter((name: Name) => {
        // allow the user to search for names with or without capitals
        const lowercaseName = name.name.toLowerCase()
        // console.log('lowercase name', lowercaseName)
        return lowercaseName.includes(searchString) || name.name.includes(searchString)
      })
      return filtered
    }
    return names
  }

}
