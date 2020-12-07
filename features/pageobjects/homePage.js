const acceptPage = require('../pageobjects/acceptPage');
const utilities = require('../utilitiles/utilities');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get btnLoginWithWebWallet () { return $('//button[contains(text(), "Login with Web Wallet")]') }
    get checkBox() {return $('//span[@class="checkmark"]')}
    get btnGenerateNewWallet() { return $('//button[@data-cy="generate-wallet"]')}
    get btnSkip() {return $('button[class="skip-button"]')}
    get btnGenerateWallet () { return $('button[data-cy="generate-wallet"]')}
    get proceedToWallet () {return $('button[data-cy="proceed-to-wallet"]')}
    
    clickBtnLoginWithWebWallet () {
        this.btnLoginWithWebWallet.click();
    }

    generateANewWallet() {
        this.switchtoIframe("//iframe");
        this.checkBox.click();
        this.btnGenerateNewWallet.click();
        this.btnSkip.click();
        this.btnGenerateWallet.click();
        this.checkBox.click();
        this.proceedToWallet.click();
        browser.pause(10000);
        this.switchToDefaultContent();
        utilities.switchToConfromTab();
        acceptPage.clickAcceptButton();
        utilities.switchToFirstTab();
        browser.pause(2000);
    }

    switchtoIframe(xpath) {
        browser.switchToFrame($(xpath));
      }
    
      switchToDefaultContent() {
        browser.switchToParentFrame();
      }

      openSuperheroPage(){
        return browser.url(`https://superhero.com/`)
    }

    navigateToSuperheroWalletPage () {
        return browser.url("https://wallet.superhero.com/")
    }

    // switchToConfromTab() {
    //     browser.switchToWindow(browser.getWindowHandles()[1]);
    //     browser.waitUntil(() => browser.getUrl().toLowerCase().includes('confirm-connect'), { timeout: 30000 });
    // }

    // switchToFirstTab() {
    //     browser.switchToWindow(browser.getWindowHandles()[0]);
    // }
    
}

module.exports = new HomePage();
