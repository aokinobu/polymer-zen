import { PolymerElement, html } from '@polymer/polymer';
import 'polymer-zen-progress/index.js';
import 'polymer-zen-menu/index.js';

class MyElement extends PolymerElement {

  static get properties() {
    return {
      xp: {
        notify: true,
        type: Number,
        value: 0
      }
    }
  }


  static get template() {
    return html`
      <style> .xp { color: green; } </style>
      Welcome to Zen
      <zen-progress xp=[[xp]]></zen-progress>
      <zen-menu xp=[[xp]]></zen-menu>
    `;
  }


}

customElements.define('wc-zen', MyElement);
