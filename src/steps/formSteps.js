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

const globalTimeout = 8000;
const browserTimeout = 3000;


// Always use 'function' to keet the world
Given("I go to {string}", {
    timeOut: globalTimeout
}, async function (url) {
    console.log("Openning the URL: " + url);
    await browser.get(url);
    await browser.wait(ExpectedConditions.urlIs(url), browserTimeout);
});

When("I enter {string} for field {string}", function (fieldData, fieldName, callback) {
    console.log("Searching for: " + fieldName);
    var inputField = element(by.model(fieldName))
    browser.wait(ExpectedConditions.visibilityOf(inputField), browserTimeout).then(() => {
        console.log("Found");
        inputField.sendKeys(fieldData);
        callback();
    })
});

When("I click a button", function (callback) {
    console.log("Searching for: .btn");
    var button = $(".btn");
    browser.wait(ExpectedConditions.visibilityOf(button), browserTimeout).then(() => {
        console.log("Found");
        button.click();
        callback();
    })
});


Then("field {string} contains {string}", function (longField, logContent, callback) {
    var field =  $(longField);
    browser.wait(ExpectedConditions.visibilityOf(field), browserTimeout).then( async () => {
        var fieldText = await field.getText();
        expect(fieldText.trim()).to.equal(logContent);
        callback();
    })
});
