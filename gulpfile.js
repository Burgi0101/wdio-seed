const gulp = require("gulp");
const color = require("gulp-color");
const webdriver = require("gulp-webdriver");
const args = require("yargs").argv;
const del = require("del");
const env = require("./tests/common/helpers/utils/env.js");

// this is deleting all the screenshots from the ./screenshots folder 
gulp.task("cls", (done) => {
    del(["./screenshots/*.png"]);

    done();
});

// this is deleting all the created results and reports 
gulp.task("clr", (done) => {
    del(["./allure-report"]);
    del(["./allure-results"]);

    done();
});

// this will always clean screenshots before every run in order to have only current results
gulp.task("wdio", ['cls'], (done) => {
    const conf = "config/wdio/wdio.conf.js";
    console.log(color("Running wdio config...  " + conf.toLowerCase(), "GREEN"));
    console.log(color("To run a specific suite add: --suites suitename", "YELLOW"));

    if (args.suite) {
        gulp.src(conf).pipe(webdriver({ suite: args.suite, baseUrl: env.setEnvironment() }));
    }
    else if (args.suites) {
        gulp.src(conf).pipe(webdriver({ suite: args.suites, baseUrl: env.setEnvironment() }));
    }
    else {
        gulp.src(conf).pipe(webdriver({ baseUrl: env.setEnvironment() }));
    }

    done();
});

// this will always clean screenshots and reports before every run in order to have only current results
gulp.task("teamcity", ['cls', 'clr'], (done) => {

    const conf = "config/wdio/teamcity.conf.js";
    console.log(color("Running wdio config...  " + conf.toLowerCase(), "GREEN"));
    console.log(color("To run a specific suite add: --suites suitename", "YELLOW"));

    if (args.suite) {
        gulp.src(conf).pipe(webdriver({ suite: args.suite, baseUrl: env.setEnvironment() }));
    }
    else if (args.suites) {
        gulp.src(conf).pipe(webdriver({ suite: args.suites, baseUrl: env.setEnvironment() }));
    }
    else {
        gulp.src(conf).pipe(webdriver({ baseUrl: env.setEnvironment() }));
    }

    done();
});