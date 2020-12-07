class RightPane {
    get rightPaneView() {return $('div[class="right-section"]')}
    get txtSearch() {return this.rightPaneView.$('input[placeholder="Search Superhero"]')}

    searchWebSite(searchStr){
        this.txtSearch.clearValue();
        this.txtSearch.setValue(searchStr);
    }
}

module.exports = new RightPane();