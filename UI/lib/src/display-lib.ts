import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import './hello-world';
import './dropdown';

@customElement('zs-display-lib')
export class DisplayLib extends LitElement {
  render() {
    return html`
        <zs-hello-world></zs-hello-world>
        <zs-dropdown show=${false}></zs-dropdown>
    `;
  }
}