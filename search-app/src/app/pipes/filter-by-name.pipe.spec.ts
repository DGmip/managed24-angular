import { FilterByNamePipe } from './filter-by-name.pipe'
import { names } from '../helpers/test-names'
import { Name } from '../interfaces/name'

describe('FilterByNamePipe', () => {
  const testNames: Name[] = names
  let pipe: FilterByNamePipe

  beforeEach(() => {
    pipe = new FilterByNamePipe()
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy()
  })

  it(`should filter out 'Paula'`, () => {
    const searchString = 'Paula'
    const transformed = pipe.transform(names, searchString)
    const expectedResult = [{ _id: '5c5e872caa69ef4be123ed10', name: 'Paula Gowin' }]
    console.log('transformed', transformed)
    expect(transformed[0].name).toBe('Paula Gowin')
  })

  it(`should filter out 'paula'`, () => {
    const searchString = 'paula'
    const transformed = pipe.transform(names, searchString)
    const expectedResult = [{ _id: '5c5e872caa69ef4be123ed10', name: 'Paula Gowin' }]
    console.log('transformed', transformed)
    expect(transformed[0].name).toBe('Paula Gowin')
  })

})
