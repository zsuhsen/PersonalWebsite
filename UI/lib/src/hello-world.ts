import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('zs-hello-world')
export class HelloWorld extends LitElement {
  render() {
    return html`
      <div>Hello World!</div>
    `;
  }
}