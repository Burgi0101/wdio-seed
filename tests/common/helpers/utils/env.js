const args = require("yargs").argv;

const setEnvironment = () => {
    switch (args.env) {
        case 'staging': return 'http://staging.url.com';
        case 'test': return 'http://test.url.com';
        case 'dev': return 'http://dev.url.com';
        default: return 'https://www.google.at/';
    }
};

exports.setEnvironment = setEnvironment;