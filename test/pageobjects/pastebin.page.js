

const Page = require('./page');


class Pastebin extends Page {

    get openPasteName() {
        return $('#postform-name')
    }

    get openPasteExpiration() {
        return $('#select2-postform-expiration-container');

    } 
    get openSyntaxHighlighting() {
        return $('#select2-postform-format-container');
    } 

    get shoose10Minutes() {
        return $(`//li[text()='10 Minutes']`);
    }

    get createCode() {
        return $('#postform-text')
    }

    get chooseBash() {
        return $(`//li[text()='Bash']`)
    }

get saveNewPaste(){
    return $('//*[text()="Create New Paste"]')
}
    open() {
        super.open('http://pastebin.com')
    }
}
module.exports = new Pastebin();