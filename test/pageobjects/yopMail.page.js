const Page = require("./page");

class YopMailPage extends Page {
  get emailGenerator() {
    return $('[href="email-generator"]');
  }
  get copiEmail() {
    return $('//*[@id="cprnd"]');
  }
  get checkEmail() {
    return $('//*[@class="md but text f24 egenbut"][2]');
  }
  get refreshButton() {
    return $('//*[@id="refresh"]');
  }
}

module.exports = new YopMailPage();
