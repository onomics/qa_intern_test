/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type itemPage = typeof import('./pages/item.js');
type favoritesPage = typeof import('./pages/favorites.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, itemPage: itemPage, favoritesPage: favoritesPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
