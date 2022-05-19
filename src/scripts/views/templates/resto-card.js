import CONFIG from '../../globals/config';

const restoDetailCard = (resto) => `
<div class="post-detail_card">
    <img class="post-detail_thumbnail" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" 
    alt="foto restaurant${resto.name}">
</div>

<div class="post-detail-content">
    <h2 class ="post-detail_title">${resto.name}</h2>
    <div class="post-detail_lokasi">
    <i title="icon_lokasi" class="fa-solid fa-location-dot"></i>
    <p class="resto_lokasi">Alamat: ${resto.address}, ${resto.city}</p>
    
</div>
<div class="post-detail_rating">
    <i title="icon_rating" class="fa-solid fa-star"></i>
    <p class="resto_rating">${resto.rating}</p>
</div>
<div  class="post-detail_description">
    <p class="description_title">Description</p>
    <p class="resto_description">${resto.description}</p>
</div>

<div class="post-detail_categories">
  <p class="categories_title">Kategori :</p>
  <ul>
    ${resto.categories.map((category) => `<li><p>${category.name}</p></li>
    `).join('')}
  </ul>
</div>


<div class="post-detail_menu">
  <h3 class ="menu_title">Menu</h3>
    <div class="detail_menu">
      <div class="post-detail_food">
        <p class="food_title">Food</p>
        <ul>
          ${resto.menus.foods.map((food, i) => `
                <li><p>${i + 1}) ${food.name}</p></li>
              `).join('')}
        <ul>
      </div>

      <div class="post-detail_drink">
        <p class="drink_title">Drink</p>
        <ul>
          ${resto.menus.drinks.map((drink, i) => `
                <li><p>${i + 1}) ${drink.name}</p></li>
                `).join('')}
        <ul>
      </div>
    </div>
</div>

<div class="post-detail_review">
  <h3 class="review_title">Customer Review</h3>
  <div class="review_card">
    ${resto.customerReviews.map((review) => `
        <div class="customer_review">
              <p tabindex="0" class="review_name">${review.name}</p>
              <p tabindex="0" class="review_date">${review.date}</p>
              <p tabindex="0" class="review_detail">${review.review}</p>
        </div>`).join('')}
  </div>
</div>
`;

const restoItemCard = (resto) => `
<div class="post-item">
<a href="#/resto/${resto.id}" class="post-item-a">
        <div class="post-item_card">
            <div class="post-item_lokasi">
                <i title="icon_lokasi" class="fa-solid fa-location-dot"></i> 
                <p class="resto_lokasi">Kota ${resto.city}</p>
            </div>
            <img class="post-item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}"  alt="foto restaurant${resto.name}">
          </div>
</a>
        
            
        <div class="post-item__content">
            <h1 class="post-item__title"><a href="#/resto/${resto.id}">${resto.name}</a></h1>
            <div class="post-item_rating">
                <i title="icon_rating" class="fa-solid fa-star"></i>
                <p class="resto_rating">${resto.rating}</p>
            </div>
                <div class="post-item__description">${resto.description.slice(0, 150)}...</div>
        </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedRestaurantButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  restoItemCard,
  restoDetailCard,
  createLikeRestaurantButtonTemplate,
  createLikedRestaurantButtonTemplate,
};
