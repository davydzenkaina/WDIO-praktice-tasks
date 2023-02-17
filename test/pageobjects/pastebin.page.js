const Page = require("./page");

class PastebinPage extends Page {
  get openPasteName() {
    return $("#postform-name");
  }
  get checkPasteName() {
    return $("div.info-top");
  }
  get openPasteExpiration() {
    return $("#select2-postform-expiration-container");
  }
  get openSyntaxHighlighting() {
    return $("#select2-postform-format-container");
  }
  get shoose10Minutes() {
    return $('//li[text()="10 Minutes"]');
  }
  get createCode() {
    return $("#postform-text");
  }
  get checkCode() {
    return $("div.source bash");
  }
  get chooseBash() {
    return $('//li[text()="Bash"]');
  }
  get checkBash() {
    return $("a.btn -small.h_800");
  }
  get saveNewPaste() {
    return $('//*[text()="Create New Paste"]');
  }
  open() {
    super.open("http://pastebin.com");
  }
}
module.exports = new PastebinPage();
