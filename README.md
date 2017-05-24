# E2E WevdriverIO && Typescript Seed

## 1.) Installation

**Make sure you have NodeJS installed (version 5+).**
```shell
npm install
```

## 3.) Run Tests

**run all**
```shell
gulp wdio
```
**run a specific suite / suites**
```shell
gulp wdio --suite yoursuite
gulp wdio --suites yoursuite1,yoursuite2
```

**run a specific environment**

```shell
gulp wdio --env test -> used by default
gulp wdio --env dev
gulp wdio --env staging -> currently not fully supported because of https connection issues
```

**run a specific suite on a specific environment**
```shell
gulp wdio --suite yoursuite --env dev
```

## 4.) WebdriverIO

**API**

http://webdriver.io/api.html

**Developer Guide**

http://webdriver.io/guide.html

**Gitter Chat**

If you have any issues with WebdriverIO and you can't fix them on your own
feel free to write in this chat and most probably somebody will help you. 

For harder questions where nobody else is responding write @christian-bromann, he
is a contributor and knows most probably whats going on!

https://gitter.im/webdriverio/webdriverio

## 5.) Testrail
This is the testrail repository for this project:

https://testrail.gtoffice.lan/index.php?/suites/view/34&group_by=cases:section_id&group_order=asc

