Feature('Избранное');

const addToFavorite = '//div[contains(@class, "style-header-add-favorite")]//button[@data-marker="item-view/favorite-button"]';
const inFavoriteButton = '//div[contains(@class, "style-header-add-favorite")]//button[@data-is-favorite="true"]';
const linkToFavorite = '//a[contains(@class, "index-counter") and @data-marker="header/favorites"]';
const itemTitle = '//*[.="Domain-Driven Design Distilled Vaughn Vernon"]';

Scenario('Добавление объявления в избранное из карточки товара', ({I}) => {
    I.amOnPage('/nikel/knigi_i_zhurnaly/domain-driven_design_distilled_vaughn_vernon_2639542363');
    I.waitForElement(addToFavorite, 20);
    I.click(addToFavorite);
    I.waitForElement(inFavoriteButton, 20);
    I.click(linkToFavorite);
    I.waitForElement(itemTitle, 20);
    I.seeElement(itemTitle);
})