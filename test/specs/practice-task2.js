const Pastebin = require('../pageobjects/pastebin.page');

describe('Should create New Paste in website Pastebin.com with next params', () => {
  before(async () => {
    Pastebin.open()
    browser.setWindowSize(1920, 1080)
    await Pastebin.createCode.addValue(`git config --global user.name  "New Sheriff in Town"
        git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
        git push origin master --force`)
    await Pastebin.openSyntaxHighlighting.click()
    await Pastebin.chooseBash.click()
    await Pastebin.openPasteExpiration.click()
    await Pastebin.shoose10Minutes.click()
    await Pastebin.openPasteName.addValue('how to gain dominance among developers')
    await Pastebin.saveNewPaste.click()
  })

  it('Shoud open website Pastebin.com', async () => {
    await expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
  })

  it('Should check code', async () => {
    expect(Pastebin.checkCode).toHaveValue(`git config --global user.name  "New Sheriff in Town"
     //git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
     //git push origin master --force`)
  })

  it('Should check Syntax Highlighting ', async () => {
    expect(Pastebin.checkBash).toHaveValue('Bash')
  })

})
