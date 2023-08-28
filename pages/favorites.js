const { I } = inject();

module.exports = {

  // insert your locators and methods here

  checkItem(title) {
    let itemTitle = `//*[.="${title}"]`;
    I.waitForElement(itemTitle, 20);
    I.seeElement(itemTitle);
  }
}