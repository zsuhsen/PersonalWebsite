import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('zs-dropdown')
export class Dropdown extends LitElement {
    @property({ type: Boolean })
    show: boolean = true;

    static styles = css`
    `;

    constructor() {
        super();
    }

    async connectedCallback() {
        super.connectedCallback();

        console.log('connectedCallback');
    }

    render() {
        return html`
            ${this.show ? 'yo' : ''}
            <div>Dropdown!</div>
        `;
    }
}

