const utilities = require('../utilitiles/utilities');
const AcceptPage = require('../pageobjects/acceptPage');

class TipsView {
    get tipsArea() {return $('//div[contains(@class,"tips-")]')}
    get firstrecord() {return this.tipsArea.$('//div[@class="tip__record row"][1]')}
    get commentTextArea () {return this.tipsArea.$('//div[@class="comment__section"]//textarea')}
    get btnCommentConfirm () {return $('//form[@class="send-comment"]//button[@title="Reply"]/img')}
    get btnConfirm () {return $('//button[contains(text(), "Confirm")]')}
    get commentsSection () {return this.tipsArea.$('div[class="comments__section"]')}
    get firstComment () {return this.commentsSection.$('//div[@class="tree"][1]')}
    get commentReplyTextArea() { return this.firstComment.$('textarea[placeholder="Add reply"]')}
    get allowThirdPartyPlay () {return $('//button[@class="button-plain cookies-button"]')}

    commentOnFirstRecord(txtComment) {
        this.firstrecord.waitForClickable({ timeout: 20000 });
        this.firstrecord.$('img[class="comment__icon"]').click();
        this.commentTextArea.setValue(txtComment + utilities.getRandomString(10));
        browser.keys("\uE007");
        this.btnConfirm.click();
        browser.pause(5000);
        utilities.switchToConfromTab();
        AcceptPage.clickAcceptButton();
        utilities.switchToFirstTab();
        utilities.switchToConfromTab();
        AcceptPage.clickAcceptButton();
        utilities.switchToFirstTab();
    }

    replyOnFirstComment(txtComment) {
        this.firstrecord.waitForClickable({ timeout: 20000 });
        this.firstrecord.$('img[class="comment__icon"]').click();
        this.commentReplyTextArea.setValue(txtComment + utilities.getRandomString(10)) ;
        browser.keys("\uE007");
        browser.pause(10000);
        //this.btnConfirm.click();
        utilities.switchToConfromTab();
        AcceptPage.clickAcceptButton();
        utilities.switchToFirstTab();
    }

    clickPlayOnFirstRecord() {
        this.firstrecord.$('button[class="button-plain play play-button"]').click();
        this.allowThirdPartyPlay.click();
        this.btnConfirm.click();
        this.firstrecord.$('button[class="button-plain play play-button"]').click();
        browser.pause(2000);
    }
}
module.exports = new TipsView();