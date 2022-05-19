/* eslint-disable padded-blocks */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {

  I.amOnPage('/#/favorite');
});

Scenario('menampilkan halaman kosong restaurant favorite', ({ I }) => {
  I.seeElement('#favorite_resto');
  I.wait(10);
  I.see('Restaurant Favorite Kosong', '.empty__favorite');
});

Scenario('menyukai satu restaurant', async ({ I }) => {

  I.see('Restaurant Favorite Kosong', '.empty__favorite');

  I.amOnPage('/');
  I.seeElement('.post-item__title a');
  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item__title');
  const favoriteRestaurantTitle = await I.grabTextFrom('.post-item__title a');
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});

Scenario('batal menyukai satu restaurant', async ({ I }) => {

  I.see('Restaurant Favorite Kosong', '.empty__favorite');

  /* menuju ke halaman utama */
  I.amOnPage('/');
  I.seeElement('.post-item__title a');
  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  /* klik suka restaurant */

  I.wait(1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item__title');
  const favoriteRestaurantTitle = await I.grabTextFrom('.post-item__title a');
  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  /* batal menyukai restaurant */

  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.wait(1);
  I.click('#likeButton');

  /* halaman favorite kosong */
  I.amOnPage('/#/favorite');
  I.seeElement('#favorite_resto');
  I.see('Restaurant Favorite Kosong', '.empty__favorite');
});
