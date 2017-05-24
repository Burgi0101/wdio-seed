exports.config = {

    reporters: ["spec"],
    host: "localhost",
    port: 4444,
    path: "/wd/hub",

    specs: [
        "./tests/specs/*/*.spec.ts"
    ],
    suites: {
        google: [
            "./tests/specs/google/google.spec.ts",
        ]
    },

    exclude: [
    ],

    maxInstances: 4,

    capabilities: [{
        maxInstances: 4,
        browserName: "chrome", "chromeOptions": {
            "args": ["start-maximized", "--no-sandbox"]
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
