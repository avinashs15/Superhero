const path = require('path');
const utilities = require('../utilitiles/utilities');
const AcceptPage = require('../pageobjects/acceptPage')
class UserProfilePage {
    get userprofileView () {return $('div[class="user-profile router-view"]')}
    get editProfileBtn () { return this.userprofileView.$('button[title="Edit Profile"]')}
    get textEditLocation () { return this.userprofileView.$('input[placeholder="Edit Location"]')}
    get saveBtn () { return this.userprofileView.$('button[title="Save"]')}
    get fileUpload() {return this.userprofileView.$('//input[@name="avatar"]')}
    get profileInfo() {return this.userprofileView.$('div[class="profile__info"]')};
    get profileLocation() {return this.profileInfo.$('div[class="location"]')}

    setLocation(location){
        this.editProfileBtn.click();
        this.textEditLocation.setValue(location);
        console.log(process.cwd());
        
    }

    save() {
        this.saveBtn.click();
        browser.pause(5000);
        utilities.switchToConfromTab();
        AcceptPage.clickAcceptButton();
        utilities.switchToFirstTab();
        browser.pause(2000);
    }

    uploadProfilePicture(){
        browser.execute(
            (el) =>el.style.display = 'block', this.fileUpload
        );
        const filepath = path.join(__dirname, '../image/download.png');
        console.log(filepath);
        this.fileUpload.setValue(filepath);
        browser.pause(7000);
        utilities.switchToConfromTab();
        AcceptPage.clickAcceptButton();
        browser.pause(5000);
        utilities.switchToFirstTab();
    }

    getLocation() {
        return this.profileLocation.getText();
    }
}

module.exports = new UserProfilePage();