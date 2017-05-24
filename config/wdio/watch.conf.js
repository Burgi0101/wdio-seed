exports.config = {

    reporters: ["spec"],
    host: "localhost",
    port: 4444,

    // this config is just there for developing tests to get on the fly results
    // start the watch task like this:
    // cd ./node_modules/.bin/
    // wdio ../../config/wdio/watch.conf.js --watch

    // specify your file to watch here
    specs: [
        "../../tests/specs/deposit/deposit.spec.ts"
    ],

    capabilities: [
        {
            maxInstances: 1,
            browserName: "chrome",
            chromeOptions: {
                "args": ["start-maximized"]
            }
        }
    ],

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

    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    },

    before: function () {
        require("ts-node/register");
    }
};
