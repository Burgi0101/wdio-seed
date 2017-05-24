import { GooglePage } from './google.page';

describe('test open google', () => {

    it('should open google', () => {
        GooglePage.open();

        expect(browser.getUrl()).toBe('https://www.google.at/');
    });

    it('should search for youtube', () => {
        GooglePage.open();
        GooglePage.searchFor('youtube');

        GooglePage.firstResultHeading.waitForVisible();
        expect(GooglePage.firstResultHeading.getText()).toBe('YouTube');
    });
});