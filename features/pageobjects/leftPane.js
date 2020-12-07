class LeftPane {
    get leftPane() {return $('div[class="left-section"]')}

    clickItemsOnLeftPane(itemName){
        this.leftPane.$('//a[contains(text(),"'+itemName+'")]').click();
    }

    checkIfPaneItemVisible(itemName){
        return this.leftPane.$('//a[contains(text(),"'+itemName+'")]').isDisplayed();
    }
}
module.exports = new LeftPane();
