var config = require("config")
var {
    browser,
    element,
    ExpectedConditions
} = require("protractor");

var timeout = config.get("waitTimeout");

module.exports = class ProfilePage {

    async pageRoot() {
        var formView = element(by.id("form-views"));
        await browser.wait(ExpectedConditions.presenceOf(formView), timeout);
        return formView;
    }

    async nameField() {
        var field = element(by.css("div:nth-child(1) > input"));
        await browser.wait(ExpectedConditions.visibilityOf(field), timeout);
        return field;
    }

    async setName(name) {
        var field = await this.nameField()
        field.click();
        field.clear();
        field.sendKeys(name);
    }

    async emailField() {
        var field = element(by.name("email"));
        await browser.wait(ExpectedConditions.visibilityOf(field), timeout);
        return field;
    }

    async setEmail(email) {
        var field = await this.emailField()
        field.click();
        field.clear();
        field.sendKeys(email);
    }

    async clickNextSection(){
        var button = element(by.xpath("//*[@id='form-views']/div[3]/div/a"));
        await browser.wait(ExpectedConditions.elementToBeClickable(button), timeout);
        button.click();
    }

    async pageIsReady() {
        return await this.pageRoot().isDisplayed() && this.nameField.isDisplayed()
    }
};
