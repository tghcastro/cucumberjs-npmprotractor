var {
    Given,
    When,
    Then
} = require('cucumber');

var ProfilePage = require("../page-objects/profile-page");

var profilePage = new ProfilePage();

Given('an user that already informed his profile', function () {
    return 'pending';
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
    await profilePage.setName(this.name);
    await profilePage.setEmail(this.email);
});

When('he confirms his data', async function () {
    await profilePage.clickNextSection();
});