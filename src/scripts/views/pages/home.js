import RestaurantSource from '../../data/resto-source';
import { restoItemCard } from '../templates/resto-card';

const Home = {
  async render() {
    return `
    <section class="content">
    <article class="headline">
        <figure class="headline__figure">
            <img src="/images/heros/hero-image_2-medium.jpg" width="1350" height="900" alt="About RestoKU">
            <figcaption>@RestoKu since 2022</figcaption>
        </figure>
        <div class="headline__content">
            <h1 class="headline__title">About Us</h1>
             <p tabindex="0"  class="headline__description">RestoKU adalah sebuah website yang membantu anda untuk menemukan restaurant terbaik di sekitar anda.
                                              RestoKU telah dipercaya oleh lebih dari 150.000 pengguna di seluruh indonesia</p>
             <a href="#main_content" class="headline__button">Read More</a>
        </div>
    </article>
    
    <div tabindex="0" id="main_content" class="resto_list">
        <h1 tabindex="0" class="resto__label">Explore Restaurant</h1>
        <div id="posts"></div>
    </div>
    </section>
    `;
  },

  async afterRender() {
    const restoList = await RestaurantSource.getRestaurantList();
    const restoContainer = document.querySelector('#posts');
    restoList.forEach((resto) => {
      restoContainer.innerHTML += restoItemCard(resto);
    });
  },
};

export default Home;
