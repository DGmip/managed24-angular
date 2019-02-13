import { browser, by, element } from 'protractor'

export class HomePage {

  getPage() {
    return browser.get('/')
  }

  navigateTo() {
    return browser.get('/') as Promise<any>
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>
  }

  getName() { // get Milly Shipman (There will be only one result)
    return element(by.css('.name')).getText() as Promise<string>
  }

  searchMilly() {
    return element(by.css('#search')).click()
      .then(() => {
        return browser.actions().sendKeys('milly').perform()
      }) as Promise<any>
  }
}
