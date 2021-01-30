const { assert } = require('chai');
var config = require('config');
var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var timeout = config.get("waitTimeout");

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

Given('an user that already informed his profile', function () {
    // Write code here that turns the phrase above into concrete actions
});

Given('the user', function (dataTable) {
    // TODO: How can I improve data table usage?
    this.name = dataTable.raw()[0][1];
    this.email = dataTable.raw()[1][1];

    console.log(dataTable.raw());
    console.log("- Name: " + this.name);
    console.log("- E-mail: " + this.email);
});

When('he inform its data', async function () {
    var inputName = element(by.css("#form-views > div:nth-child(1) > input"));
    await browser.wait(ExpectedConditions.visibilityOf(inputName), timeout);
    inputName.clear();
    inputName.sendKeys(this.name);

    var inputEmail = element(by.name("email"));
    await browser.wait(ExpectedConditions.visibilityOf(inputEmail), timeout);
    inputEmail.clear();
    inputEmail.sendKeys(this.email);
});

When('he confirms his data', async function () {
    var nextSectionButton = element(by.xpath("//*[@id='form-views']/div[3]/div/a"));
    await browser.wait(ExpectedConditions.elementToBeClickable(nextSectionButton), timeout);
    nextSectionButton.click();
});