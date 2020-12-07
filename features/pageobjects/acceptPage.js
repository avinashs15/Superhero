class AcceptPage {
    get btnAccept () {return $('button[data-cy="accept"]')}

    clickAcceptButton() {
        this.btnAccept.waitForClickable({timeout : 20000})
        this.btnAccept.click();
    }

    clickConfirmButton() {

    }

}

module.exports = new AcceptPage();