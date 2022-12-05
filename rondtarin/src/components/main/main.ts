import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('main-element')
export class MainElement extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <slot name="nav"></slot>
            <slot name="content"></slot>
            <slot name="footer"></slot>
        `
    }
}