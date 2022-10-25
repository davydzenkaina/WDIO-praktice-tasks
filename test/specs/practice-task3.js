
const googleCloudPlatform = require('../pageobjects/googleCloudPlatform.page')





describe('open website cloud.google.com, search Google Cloud Calculator and choose params', () => {
  before(async () => {
    googleCloudPlatform.open();
    await googleCloudPlatform.searchCalculator.addValue('Google Cloud Platform Pricing Calculator')
    await browser.keys("Enter")
    await googleCloudPlatform.openCalculator.click()
    await browser.switchToFrame(0)
    await browser.switchToFrame(0)
    await googleCloudPlatform.openComputeEngine.click()
    await googleCloudPlatform.numberOfInstances.addValue('4')
    await googleCloudPlatform.operetionSistem.click()
    await googleCloudPlatform.chooseFree.click()
    await googleCloudPlatform.vmClass.click()
    await googleCloudPlatform.chooseRegular.click()
    await googleCloudPlatform.instanceType.click()
    await googleCloudPlatform.chooseN1.click()
    await googleCloudPlatform.searchMachineType.click()
    await googleCloudPlatform.searchStd8.click()
    await googleCloudPlatform.searchAddGpus.click()
    await googleCloudPlatform.searchGpuType.click()
    await googleCloudPlatform.searchTesla100.click()
    await googleCloudPlatform.searchNumberOfGpus.click()
    await googleCloudPlatform.searchNumberOfGpus1.click()
    await googleCloudPlatform.searchLocalSSD.click()
    await googleCloudPlatform.searchLocalSSD375Gb.click()
    await googleCloudPlatform.searchDataCenterLocation.click()
    await googleCloudPlatform.searchLocationFrankfurt.click()
    await googleCloudPlatform.searchCommittedUsage.click()
    await googleCloudPlatform.searchCommittedUsage1Year.click()
    await googleCloudPlatform.addToEstimate.click()
  })

  it('regular', async () => {
    expect(googleCloudPlatform.checkRegular).toHaveValue('Regular')
  })

  it('Instance type:', async () => {
    expect(googleCloudPlatform.checkStd8).toHaveValue('n1-standard-8')
  })

  it('Instance type:', async () => {
    expect(googleCloudPlatform.checkLocationFrankfurt).toHaveValue('Frankfurt')
  })

  it
    ('Instance type:', async () => {
      expect(googleCloudPlatform.checkLocalSSD375Gb).toHaveValue('2x375 GiB')
    })

  it('Instance type:', async () => {
    expect(googleCloudPlatform.checkCommittedUsage1Year).toHaveValue('1 Year')
  })

  it('price 1', async () => {
    await expect(googleCloudPlatform.price1).toHaveTextContaining("1,081.20")
  })

})