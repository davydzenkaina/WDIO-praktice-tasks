const googleCloudPlatform = require("../pageobjects/googleCloudPlatform.page");

const yopMail = require("../pageobjects/yopMail.page");

describe("open website cloud.google.com, search Google Cloud Calculator and choose params", () => {
  before(async () => {
    googleCloudPlatform.open();
    await googleCloudPlatform.fillCalculator();
    await googleCloudPlatform.chooseEmailEstimate.click();
    await browser.newWindow("https://yopmail.com/ru/");
    await yopMail.emailGenerator.click();
    await yopMail.copiEmail.click();
    await browser.switchWindow("https://cloud.google.com/");
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    await googleCloudPlatform.addEmail.addValue(["Control", "v"]);
    await googleCloudPlatform.sendEmail.click();
    await browser.switchWindow("https://yopmail.com/ru/");
    await yopMail.checkEmail.click();
    await yopMail.refreshButton.click();
  });

  it("price", async () => {
    await browser.switchToFrame(2);
    await expect(googleCloudPlatform.price).toHaveTextContaining("1,081.20");
  });
});
