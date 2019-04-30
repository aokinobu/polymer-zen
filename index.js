import { PolymerElement, html } from '@polymer/polymer';
import 'polymer-zen-progress/index.js';
import 'polymer-zen-menu/index.js';

class MyElement extends PolymerElement {


  static get template() {
    return html`
      <style> .title { color: purple; } </style>
      <span class="title">Welcome to Zen!<br /></span>
      <span class="tooltip">Here is your progress</span><br />
      <zen-progress xp={{xp}} xp-changed="modifyXp"></zen-progress></br>
      <span class="tooltip">Choose something from the menu</span><br />
      <zen-menu xp={{xp}}></zen-menu>
    `;
  }

  modifyXp() {
    console.log("xp modified");
    let element = this.shadowRoot.querySelector('zen-progress');
    console.log(element);
    element.updateMenu();
  }

}

customElements.define('wc-zen', MyElement);
