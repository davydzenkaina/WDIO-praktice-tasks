const Page = require("./page");

class GoogleCloudPlatformPage extends Page {
  get searchCalculator() {
    return $('//input[@name="q"]');
  }
  get openComputeEngine() {
    return $("div.name.ng-binding");
  }
  get openCalculator() {
    return $("a.gs-title");
  }
  get numberOfInstances() {
    return $('//*[@name="quantity"]');
  }
  get operationSystem() {
    return $('[ng-model="listingCtrl.computeServer.os"]');
  }
  get chooseFree() {
    return $('[value="free"]');
  }
  get vmClass() {
    return $('[ng-model="listingCtrl.computeServer.class"]');
  }
  get chooseRegular() {
    return $('[value="regular"]');
  }
  get checkRegular() {
    return $("div.md-list-item-text.ng-binding");
  }
  get instanceType() {
    return $('//span/div[contains(text(),"E2")]');
  }
  get chooseN1() {
    return $('[value="n1"]');
  }
  get searchMachineType() {
    return $('//span/div[contains(text(),"n1-standard-1")]');
  }
  get searchStd8() {
    return $('[value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]');
  }
  get checkStd8() {
    return $("div.md-list-item-text.ng-binding.cpc-cart-multiline.flex");
  }
  get searchAddGpus() {
    return $('[ng-model="listingCtrl.computeServer.addGPUs"]');
  }
  get searchGpuType() {
    return $('[placeholder="GPU type"]');
  }
  get searchTesla100() {
    return $('[value="NVIDIA_TESLA_V100"]');
  }
  get searchNumberOfGpus() {
    return $('[placeholder="Number of GPUs"]');
  }
  get searchNumberOfGpus1() {
    return $(
      '[value="1"][ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"]'
    );
  }
  get searchLocalSSD() {
    return $('[placeholder="Local SSD"]');
  }
  get searchLocalSSD375Gb() {
    return $('//md-option/div[contains(text(),"2x375")]');
  }
  get checkLocalSSD375Gb() {
    return $("div.md-list-item-text ng-binding cpc-cart-multiline flex");
  }
  get searchDataCenterLocation() {
    return $('[placeholder="Datacenter location"]');
  }
  get searchLocationFrankfurt() {
    return $(
      "md-select-menu[class='md-overflow']" +
        " md-option[value='europe-west3'][ng-repeat*='fullRegionList']"
    );
  }
  get checkLocationFrankfurt() {
    return $("div.md-list-item-text ng-binding");
  }
  get searchCommittedUsage() {
    return $('//span/div[contains(text(),"None")]');
  }
  get searchCommittedUsage1Year() {
    return $(
      "div[class='md-select-menu-container md-active md-clickable']" +
        " md-option[value='1'][class='md-ink-ripple']"
    );
  }
  get checkCommittedUsage1Year() {
    return $("div.md-list-item-text.ng-binding");
  }
  get addToEstimate() {
    return $('[aria-label="Add to Estimate"]');
  }
  get chooseEmailEstimate() {
    return $('[ng-click="cloudCartCtrl.showEmailForm();"]');
  }
  get addEmail() {
    return $('[ng-model="emailQuote.user.email"]');
  }
  get sendEmail() {
    return $('[aria-label="Send Email"]');
  }
  get price1() {
    return $('//*[@class="md-1-line md-no-proxy"]');
  }
  get price() {
    return $(`//td/h2`);
  }
  open() {
    super.open("https://cloud.google.com/");
  }

  async fillCalculator() {
    await this.searchCalculator.addValue(
      "Google Cloud Platform Pricing Calculator"
    );
    await browser.keys("Enter");
    await this.openCalculator.click();
    await browser.switchToFrame(0);
    await browser.switchToFrame(0);
    await this.openComputeEngine.click();
    await this.numberOfInstances.addValue("4");
    await this.operationSystem.click();
    await this.chooseFree.click();
    await this.vmClass.click();
    await this.chooseRegular.click();
    await this.instanceType.click();
    await this.chooseN1.click();
    await this.searchMachineType.click();
    await this.searchStd8.click();
    await this.searchAddGpus.click();
    await this.searchGpuType.click();
    await this.searchTesla100.click();
    await this.searchNumberOfGpus.click();
    await this.searchNumberOfGpus1.click();
    await this.searchLocalSSD.click();
    await this.searchLocalSSD375Gb.click();
    await this.searchDataCenterLocation.click();
    await this.searchLocationFrankfurt.click();
    await this.searchCommittedUsage.click();
    await this.searchCommittedUsage1Year.click();

    await this.addToEstimate.click();
  }
}
module.exports = new GoogleCloudPlatformPage();
