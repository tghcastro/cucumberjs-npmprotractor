var config = require("config")

exports.config = {

    /**
     * webdriver-manager address
     */
    seleniumAddress: "http://localhost:4444/wd/hub",

    framework: 'custom',
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            // args: ["--headless", "--disable-gpu","--window-size=800,600"] // Headless test of chome
        }
    },

    ignoreUcaughtExceptions: "true",

    specs: [
        "src/features/*.feature"
    ],

    cucumberOpts: {
        require: ["src/steps/*.js", "src/support/*.js"],
        format: `json:${config.get("report.dir") + config.get("report.file")}`,
        strict: true
    }
}