const Pastebin = require("../pageobjects/pastebin.page");

describe("Should create New Paste on website Pastebin.com ", () => {
  it("Should create New Paste on website Pastebin.com with next params", async () => {
    Pastebin.open();
    await Pastebin.createCode.addValue("Hello from WebDriver");
    await Pastebin.openPasteExpiration.click();
    await Pastebin.shoose10Minutes.click();
    await Pastebin.openPasteName.addValue("helloweb");
  });
});
