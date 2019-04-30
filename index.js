import {PolymerElement, html} from '@polymer/polymer';
import 'polymer-zen-progress/index.js';
import 'polymer-zen-menu/index.js';

class MyElement extends PolymerElement {

  static get properties() { }

  static get template() {
    return html`
      <style> .xp { color: green; } </style>
      Welcome to Zen
      <zen-progress></zen-progress>
      <zen-menu></zen-menu>
    `;
  }
}

customElements.define('wc-zen', MyElement);
