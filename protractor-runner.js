var reporter = require("cucumber-html-reporter");
var shell = require("shelljs");
var os = require("os");
var config = require("config");

var htmlReportOptions = {
    theme: "bootstrap",
    jsonFile: config.get("report.dir") + config.get("report.file"),
    output: `${config.get("report.dir")}cucumber_report.html`,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Browser": "Chrome",
        "Platform": os.type,
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

async function runProtractorAndGenerateReport() {
    await shell.exec("npm run protractor"); //Run as a child process
    await reporter.generate(htmlReportOptions); //Generates the report after the execution 
};

runProtractorAndGenerateReport();