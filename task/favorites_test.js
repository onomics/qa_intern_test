Feature('Избранное');

const linkToFavorite = '//a[contains(@class, "index-counter") and @data-marker="header/favorites"]';

Scenario('Добавление объявления в избранное из карточки товара', ({I, itemPage, favoritesPage}) => {
    itemPage.openPage();
    itemPage.addToFavorite();
    itemPage.checkInFavorite();
    I.click(linkToFavorite);
    favoritesPage.checkItem('Domain-Driven Design Distilled Vaughn Vernon');
})