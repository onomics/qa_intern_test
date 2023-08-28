Feature('Избранное');

const linkToFavorite = '//a[contains(@class, "index-counter") and @data-marker="header/favorites"]';
const itemTitle = '//*[.="Domain-Driven Design Distilled Vaughn Vernon"]';

Scenario('Добавление объявления в избранное из карточки товара', ({I, itemPage}) => {
    itemPage.openPage();
    itemPage.addToFavorite();
    itemPage.checkInFavorite();
    I.click(linkToFavorite);
    I.waitForElement(itemTitle, 20);
    I.seeElement(itemTitle);
})