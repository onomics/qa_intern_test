const { I } = inject();

module.exports = {

  // insert your locators and methods here
  addToFavoriteButton: '//div[contains(@class, "style-header-add-favorite")]//button[@data-marker="item-view/favorite-button"]',
  inFavoriteButton: '//div[contains(@class, "style-header-add-favorite")]//button[@data-is-favorite="true"]',

  openPage(url) {
    I.amOnPage(url);
  },
  addToFavorite() {
    I.waitForElement(this.addToFavoriteButton, 20);
    I.click(this.addToFavoriteButton);
  },
  checkInFavorite() {
    I.waitForElement(this.inFavoriteButton, 20);
  }
}