class FooterCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer>
            <p>Copyright © 2022 - Aurel Chesya Berliana - Submission Front-end Expert - RestoKU </p>
            </footer>
        `;
  }
}

customElements.define('footer-card', FooterCard);
