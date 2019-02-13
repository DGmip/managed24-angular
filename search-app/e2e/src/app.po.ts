import { browser, by, element } from 'protractor'
import { HomePage } from './pages/home.page'

export class AppPage {

  navigateTo() {
    return browser.get('/') as Promise<any>
  }

  getTitleText() {
    return element(by.css('title h1')).getText() as Promise<string>
  }
}
