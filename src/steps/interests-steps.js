const { assert } = require('chai');
var config = require('config');
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var {
    Given,
    When,
    Then
} = require('cucumber');

var {
    browser,
    $,
    element,
    ExpectedConditions
} = require('protractor');

var timeout = config.get("waitTimeout");

When('he that his preference is {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

When('he that his preference is {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('he should be asked for his interests', async function () {
    var interestsQuestion = element(by.xpath("//*[@id='form-views']/label"));
    await browser.wait(ExpectedConditions.presenceOf(interestsQuestion), timeout);
    var expectedMessage = "What's Your Console of Choice?";
    expect(await interestsQuestion.getText()).to.equal(expectedMessage);
});