class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="header__inner">
      <h1 tabindex="0" class="header__title">RestoKU</h1>
      <button tabindex="0" id="menu" class="header__menu">☰</button>
      <nav id="drawer" class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/home">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://www.linkedin.com/in/aurel-chesya-berliana-b27728151/" target="_blank" rel="noreferrer">About Us</a></li>
        </ul>
     </nav>
    </div>`;
  }
}

customElements.define('app-bar', AppBar);
