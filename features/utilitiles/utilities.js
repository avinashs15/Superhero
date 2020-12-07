class Utilities {
    
    switchtoIframe(xpath) {
        browser.switchToFrame($(xpath));
      }
    
    switchToDefaultContent() {
        browser.switchToParentFrame();
      }

    switchToFirstTab() {
        browser.switchToWindow(browser.getWindowHandles()[0]);
    }
    
    switchToConfromTab() {
        browser.waitUntil(() => browser.getWindowHandles().length> 1 , {timeout : 30000})
        browser.switchToWindow(browser.getWindowHandles()[1]);
        browser.waitUntil(() => browser.getUrl().toLowerCase().includes('confirm'), { timeout: 30000 });
    }

    getRandomString(stringLength) {
        let text = '';
        const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < stringLength; i++) {
          text += charSet.charAt(Math.floor(Math.random() * charSet.length));
        }
        return text;
      }
}

module.exports = new Utilities();