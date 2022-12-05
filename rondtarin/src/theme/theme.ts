import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import './theme.scss'

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('button-element')
export class Button extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <button class="button-container">
                <slot></slot>
            </button>
        `
    }
}