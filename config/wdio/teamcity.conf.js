exports.config = {

    reporters: ['spec', 'teamcity', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
    host: "localhost",
    port: 4444,
    path: "/wd/hub",

    specs: [
        "./tests/specs/*.spec.ts"
    ],

    exclude: [
    ],

    capabilities: [
        {
            maxInstances: 10,
            browserName: "chrome", "chromeOptions": {
                "args": ["start-maximized"]
            }

        },
        {
            maxInstances: 10,
            browserName: 'firefox',
            firefoxOptions: {
                "args": ["start-maximized"]
            }
        }],

    sync: true,
    logLevel: "silent",
    coloredLogs: true,
    screenshotPath: "./screenshots/",

    // baseUrl can be something like http://example.greentube.lan
    baseUrl: "",

    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    services: ["selenium-standalone"],

    framework: "jasmine",

    reporterOptions: {
        outputDir: "./allure-report/"
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },

    before: function () {
        require("ts-node/register");
    }
};
