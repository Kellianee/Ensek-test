describe('Navigate Ensek', function () {
  it('can find search results', function () {
      browser.driver.get('https://ensekautomationcandidatetest.azurewebsites.net/').then(function () {
          browser.driver.findElement(by.xpath('//a[@href="/Energy/Buy"]')).click().then(function () {
              expect(browser.driver.getTitle()).toEqual('Buy - Candidate Test');
          });
      });
  });
});
