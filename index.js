import {PolymerElement, html} from '@polymer/polymer';

class MyElement extends PolymerElement {

  static get properties() { }

  static get template() {
    return html`
      <style> .xp { color: green; } </style>
      Welcome to Zen
    `;
  }
}

customElements.define('wc-zen', MyElement);
  