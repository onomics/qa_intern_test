const { I } = inject();

module.exports = {

  // insert your locators and methods here
  addToFavoriteButton: '//div[contains(@class, "style-header-add-favorite")]//button[@data-marker="item-view/favorite-button"]',
  inFavoriteButton: '//div[contains(@class, "style-header-add-favorite")]//button[@data-is-favorite="true"]',

  openPage() {
    I.amOnPage('/nikel/knigi_i_zhurnaly/domain-driven_design_distilled_vaughn_vernon_2639542363');
  },
  addToFavorite() {
    I.waitForElement(this.addToFavoriteButton, 20);
    I.click(this.addToFavoriteButton);
  },
  checkInFavorite() {
    I.waitForElement(this.inFavoriteButton, 20);
  }
}