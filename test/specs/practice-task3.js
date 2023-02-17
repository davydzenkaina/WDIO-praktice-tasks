const googleCloudPlatform = require("../pageobjects/googleCloudPlatform.page");

describe("open website cloud.google.com, search Google Cloud Calculator and choose params", () => {
  before(async () => {
    googleCloudPlatform.open();
    await googleCloudPlatform.fillCalculator();
  });

  it("regular", async () => {
    await expect(googleCloudPlatform.checkRegular).toHaveValue("Regular");
  });

  it("Instance type:", async () => {
    await expect(googleCloudPlatform.checkStd8).toHaveValue("n1-standard-8");
  });

  it("Instance type:", async () => {
    await expect(googleCloudPlatform.checkLocationFrankfurt).toHaveValue(
      "Frankfurt"
    );
  });

  it("Instance type:", async () => {
    await expect(googleCloudPlatform.checkLocalSSD375Gb).toHaveValue(
      "2x375 GiB"
    );
  });

  it("Instance type:", async () => {
    await expect(googleCloudPlatform.checkCommittedUsage1Year).toHaveValue(
      "1 Year"
    );
  });

  it("price 1", async () => {
    await expect(googleCloudPlatform.price1).toHaveTextContaining("1,081.20");
  });
});
