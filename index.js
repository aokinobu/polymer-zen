import { PolymerElement, html } from '@polymer/polymer';
import 'polymer-zen-progress/index.js';
import 'polymer-zen-menu/index.js';

class MyElement extends PolymerElement {


  static get template() {
    return html`
      <style> .title { color: purple; } </style>
      <span class="title">This is the Zen Menu Component.</br></span>
      <zen-progress xp={{xp}}></zen-progress></br>
      <zen-menu xp={{xp}}></zen-menu>
    `;
  }


}

customElements.define('wc-zen', MyElement);
