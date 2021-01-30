var config = require("config")
var {
    browser,
    element,
    ExpectedConditions
} = require("protractor");

var timeout = config.get("waitTimeout");

module.exports = class InterestPage {

    async interestQuestion() {
        var label = element(by.xpath("//*[@id='form-views']/label"));
        await browser.wait(ExpectedConditions.presenceOf(label), timeout);
        return label.getText();
    }

    async interestField(interest) {
        var field = element(by.xpath("//label[text()[contains(.," + interest + ")]]/input"));
        await browser.wait(ExpectedConditions.visibilityOf(field), timeout);
        return field;
    }

    async chooseInterest(interest) {
        var field = await this.interestField(interest)
        field.click();
    }

    async nextSectionButton(){
        var button = element(by.css("#form-views > div.form-group.row.ng-scope > div > a"));
        await browser.wait(ExpectedConditions.elementToBeClickable(button), timeout);
        return button
    }

    async clickNextSection(){
        var button = await this.nextSectionButton()
        button.click();
    }
};
