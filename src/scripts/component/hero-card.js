class HeroCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
        <div tabindex="0" class="hero__inner">
            <h1 class="hero__title">Temukan Restaurant Terbaik di Kotamu</h1>
            <p class="hero__tagline">Find the Best Restaurant in the Town!</p>
        </div>
    </div>
    `;
  }
}
customElements.define('hero-card', HeroCard);
