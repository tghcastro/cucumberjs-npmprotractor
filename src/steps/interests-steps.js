var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var {
    Given,
    When,
    Then
} = require('cucumber');

var ProfilePage = require("../page-objects/profile-page");
var InterestsPage = require("../page-objects/interests-page");

var profilePage = new ProfilePage();
var interestsPage = new InterestsPage();

Given('his preference is {string}', function (interest) {
    interestsPage.chooseInterest(interest);
});

When('he confirms his preference', function () {
    interestsPage.clickNextSection();
});

Then('he should be asked for his interests', async function () {
    var question = await interestsPage.interestQuestion();
    var expectedMessage = "What's Your Console of Choice?";
    expect(question).to.equal(expectedMessage);
});