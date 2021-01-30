var config = require('config');

var {
    setDefaultTimeout,
    Before,
    BeforeAll,
    After,
    AfterAll
} = require('cucumber');

var {
    browser
} = require('protractor');

const timeout = config.get("cucumberDefaultTimeout");
setDefaultTimeout(timeout)

async function openSitePage() {
    var sitePage = config.get("startPage");
    console.log("Site Page: " + sitePage);
    browser.get(sitePage);
    await browser.wait(ExpectedConditions.urlIs(sitePage), timeout);
}

async function takeScreenshot(attach) {
    const png = await browser.takeScreenshot();
    var decodedImage = new Buffer.from(png, "base64");
    return attach(decodedImage, "image/png");
}

BeforeAll(async function () {
    console.log("Starting Tests ################### ");
});

Before(async function (scenario) {
    console.log("Starting scenario: " + scenario.pickle.name);
    await openSitePage();
});

After(async function (scenario) {
    console.log("Finishing scenario: " + scenario.pickle.name);
    if (scenario.result.status === "failed") {
        await takeScreenshot(this.attach);
    }
});

AfterAll(async function () {
    console.log("Finished Tests ################### ");
});