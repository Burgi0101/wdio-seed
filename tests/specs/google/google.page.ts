export class GooglePage {

    public static get firstResultHeading() { return browser.element('#rso>div>div>div>div>div>h3'); }

    private static get searchInput() { return browser.element('#lst-ib'); }
    private static get searchButton() { return browser.element('button[name="btnG"]'); }

    static open() {
        // is taking default baseUrl which is set by gulp wdio
        browser.url('/');
    }

    static searchFor(text: string) {
        GooglePage.searchInput.waitForVisible();
        GooglePage.searchInput.addValue(text);

        GooglePage.searchButton.waitForVisible();
        GooglePage.searchButton.click();
    }
}