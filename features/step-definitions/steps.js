const { Given, When, Then, And } = require('cucumber');
const HomePage = require('../pageobjects/homePage');
const LeftPane = require('../pageobjects/leftPane');
const userProfilePage = require('../pageobjects/userProfilePage');
const RightPane = require('../pageobjects/rightPane');
const TipsView = require('../pageobjects/tipsView');

Given("I am on superhero.com page", () => {
    HomePage.openSuperheroPage();
})

When("I Generate a new wallet", () => {
    HomePage.generateANewWallet();
})

When("I click Login with web wallet", () => {
    HomePage.clickBtnLoginWithWebWallet();
})

Then("I should click on {string} in the left pane", function(paneItem){
    LeftPane.clickItemsOnLeftPane(paneItem);
})

Then("I should verify {string} is visible in the left pane", function(paneItem) {
    LeftPane.checkIfPaneItemVisible(paneItem)
})

Then("I should be able to change location to {string}", function(location){
    userProfilePage.setLocation(location);
})

Then("I should be able to save", function() {
    userProfilePage.save();
})

Then("I should be able to upload profile photo", function() {
    userProfilePage.uploadProfilePicture();
})

Then("I should be able to verify that location is set to {string}", function  (location) {
    expect(userProfilePage.getLocation()).toEqual(location);
})

When('I search a post with string {string}',function (strSearch) {
    RightPane.searchWebSite(strSearch)  
})

Then ('I should be able to add comment {string} on the first post', function (comment) {
    TipsView.commentOnFirstRecord(comment);  
})

Then('I should be able to add reply to the first comment with {string}', function(reply){
    TipsView.replyOnFirstComment(reply);
});

Then('is should be able to play the third party video', function () {
    TipsView.clickPlayOnFirstRecord();
})

Given('I am on superhero wallet page', function () {
    HomePage.navigateToSuperheroWalletPage();
    browser.pause(1000);
})