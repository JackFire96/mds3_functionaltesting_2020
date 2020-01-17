var conf = require('../../nightwatch.conf.js');

module.exports = {
  'Demo test GitHub': function (browser) {
    browser
      .url('https://www.uber.com/fr/fr/')  // visit the url
      .waitForElementVisible('body'); // wait for the body to be rendered
      // check if we are seeing the Mobile Version of GitHub
      browser.element('css selector', '.switch-to-desktop', function(result) {
        if(result.status != -1) { //Element exists, do something
            browser.assert.elementPresent("/html/head/title")
            .assert.elementPresent('//*[@id="/sign-in/"]')
            .elementPresent('//*[@id="/signup/"]')
            .click('//*[@id="/sign-in/"]')
            .elementPresent('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[1]/a')
            .elementPresent('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[2]/a')
            .click('//*[@id="root"]/div/div/header/div[2]/div/div/div/div/div[6]/div/div[1]/a')
            .waitForElementVisible('body',1000); // wait for the body to be rendered
        }
      });
    // part two:
    browser
        
        .assert.elementPresent("/html/head/title")
        .urlEquals('https://auth.uber.com/login/?next_url=https%3A%2F%2Fdrivers.uber.com')
        .elementPresent('#mainForm > fieldset > div:nth-child(2) > div:nth-child(3) > label')
        .end();
    }
  };
  