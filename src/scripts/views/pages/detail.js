import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/resto-source';
import { restoDetailCard } from '../templates/resto-card';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
    <section class="content">
    <div tabindex="0" id="main_content">
        <h1 tabindex="0" class="detail__label">Restaurant Detail</h1>
        <div id="detail"></div>
        <div class="like" id="likeButtonContainer"></div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.getRestaurantDetail(url.id);
    const restoDetailContainer = document.querySelector('#detail');
    restoDetailContainer.innerHTML = restoDetailCard(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant,
    });
  },
};

export default Detail;
