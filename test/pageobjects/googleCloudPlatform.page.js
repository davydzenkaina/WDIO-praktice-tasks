const Page = require('./page');


class Pastebin extends Page {

   get searchCalculator(){
    return $(`//input[@name='q']`)
    }
    get openComputeEngine  (){
        return $('div.name.ng-binding')
    }
    get openCalculator  (){
         return $('a.gs-title')
       }
    get numberOfInstances (){
        return $(`//*[@name='quantity']`)
    }
    get operetionSistem (){
        return $(`[ng-model="listingCtrl.computeServer.os"]`)
        }
        
    get chooseFree (){
        return $(`[value="free"]`)
        }
        get vmClass (){
        return $(`[ng-model="listingCtrl.computeServer.class"]`)
    }
        get chooseRegular (){
        return $(`[value="regular"]`)
    }
        get checkRegular (){
        return $('div.md-list-item-text.ng-binding')
    }
    get instanceType (){
        return $(`//span/div[contains(text(),'E2')]/../..`)
    }
get chooseN1 () {
    return $('[value="n1"]')
}
get searchMachineType (){
    return $(`//span/div[contains(text(),'n1-standard-1')]/../..`)
}
get searchStd8 (){
    return $('[value="CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"]')
}
get checkStd8 (){
    return $('div.md-list-item-text.ng-binding.cpc-cart-multiline.flex')
}
get searchAddGpus (){
    return $('[ng-model="listingCtrl.computeServer.addGPUs"]')
}
get searchGpuType (){
    return $('[placeholder="GPU type"]')
}
get searchTesla100 (){
    return $(`[value="NVIDIA_TESLA_V100"]`)
}
get searchNumberOfGpus (){
   return $('[placeholder="Number of GPUs"]')
}
get searchNumberOfGpus1 (){
   return $(`[value='1'][ng-disabled="item.value != 0 && item.value < listingCtrl.minGPU"]`)
}
get searchLocalSSD (){
    return $(`[placeholder="Local SSD"]`)
}
get searchLocalSSD375Gb (){
    return $(`//md-option/div[contains(text(),'2x375')]/..`)
}
get checkLocalSSD375Gb (){
    return $('div.md-list-item-text ng-binding cpc-cart-multiline flex')
}
get searchDataCenterLocation (){
    return $('[placeholder="Datacenter location"]')
}
get searchLocationFrankfurt (){
    return $("md-select-menu[class='md-overflow']" + " md-option[value='europe-west3'][ng-repeat*='fullRegionList']")
}
get checkLocationFrankfurt (){
    return $('div.md-list-item-text ng-binding')
}
get searchCommittedUsage (){
    return $(`//span/div[contains(text(),'None')]/../..`)
}
get searchCommittedUsage1Year (){
    return $("div[class='md-select-menu-container md-active md-clickable']" +
    " md-option[value='1'][class='md-ink-ripple']")
}
get checkCommittedUsage1Year (){
    return $('div.md-list-item-text.ng-binding')
}
    get addToEstimate (){
    return $(`[aria-label="Add to Estimate"]`)
    }
    get chooseEmailEstimate (){
    return $('#email_quote')
    }
    get emailGenerator (){
    return $(`[href="email-generator"]`)
    }
    get copiEmail(){
    return $(`//*[@id="cprnd"]`)
    }
    get addEmail (){
        return $('[ng-model="emailQuote.user.email"]')
    }
    get sendEmail (){
        return $('[aria-label="Send Email"]')
    }
    get checkEmail (){
        return $('//*[@class="md but text f24 egenbut"][2]')
    }
    get refreshButton (){
        return $(`//*[@id="refresh"]`)
    }
    get price1 (){
        return $(`//*[@class="md-1-line md-no-proxy"]//b`)
    }
    get price (){
        return $(`//td/h2`)
    }
    open() {
        super.open('https://cloud.google.com/')
    }
}
module.exports = new Pastebin();