const Pastebin = require('../pageobjects/pastebin.page');

describe('Should create New Paste on website Pastebin.com ', () => {
  it('Should create New Paste on website Pastebin.com with next params', async () => {
    Pastebin.open()
    browser.setWindowSize(1920, 1080)
    await Pastebin.createCode.addValue('Hello from WebDriver')
    await Pastebin.openPasteExpiration.click()
    await Pastebin.shoose10Minutes.click()
    await Pastebin.openPasteName.addValue('helloweb')
  })
})

