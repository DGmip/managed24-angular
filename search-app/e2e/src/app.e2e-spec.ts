import { AppPage } from './app.po'
import { browser, logging } from 'protractor'
import { HomePage } from './pages/home.page'

describe('Managed 24 Test E2E', () => {
  const homePage = new HomePage()

  describe('The homepage should work', () => {

    beforeAll(() => {
      homePage.getPage()
    })

    it('should have the right title', () => {
      homePage.getTitleText()
        .then((title: string) => {
          expect(title).toEqual('Searchable list of names')
        })
    })

    it('should search for milly and show the name Milly Shipman', async () => {
      const search = await homePage.searchMilly()
      browser.sleep(600)
      const name = await homePage.getName()
      console.log('the name', name)
      expect(name).toEqual('Milly Shipman')
    })
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER)
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }))
  })
})
