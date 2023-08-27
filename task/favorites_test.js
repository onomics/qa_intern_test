Feature('Избранное');

Scenario('Добавление объявления в избранное из карточки товара', ({I}) => {
    I.amOnPage('/nikel/knigi_i_zhurnaly/domain-driven_design_distilled_vaughn_vernon_2639542363');
    I.waitForElement('//div[contains(@class, "style-header-add-favorite")]//button[@data-marker="item-view/favorite-button"]', 20);
    I.click('//div[contains(@class, "style-header-add-favorite")]//button[@data-marker="item-view/favorite-button"]');
    I.waitForElement('//div[contains(@class, "style-header-add-favorite")]//button[@data-is-favorite="true"]', 20)
    I.click('//a[contains(@class, "index-counter")]');
    I.waitForElement('//*[.="Domain-Driven Design Distilled Vaughn Vernon"]', 20);
    I.seeElement('//*[.="Domain-Driven Design Distilled Vaughn Vernon"]');
})