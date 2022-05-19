import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { restoItemCard } from '../templates/resto-card';

const Favorite = {
  async render() {
    return `
    <section class="content">
    <div tabindex="0" id="main_content">
        <h1 tabindex="0" class="resto__label">Favorite Restaurant</h1>
        <div id="favorite_resto"></div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const favorite = await FavoriteRestaurantIdb.getAllRestaurants();
    const favoriteContainer = document.querySelector('#favorite_resto');

    // Jika data restaurant kosong
    if (favorite.length === 0) {
      favoriteContainer.innerHTML = `
      <div class="empty__favorite">
      Restaurant Favorite Kosong
      </div>`;
    }

    // Menampilkan seluruh restaurant
    favorite.forEach((restaurants) => {
      favoriteContainer.innerHTML += restoItemCard(restaurants);
    });
  },
};

export default Favorite;
