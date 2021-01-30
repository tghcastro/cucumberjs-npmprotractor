exports.config={

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
        "features/*.feature"
    ],

    cucumberOpts: {
        require: "features/steps/*.js",
        format: "json:report/results.json",
        strict: true
    }
}