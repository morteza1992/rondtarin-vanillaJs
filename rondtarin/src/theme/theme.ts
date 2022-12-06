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
    private readonly text: null;
    private readonly customClass: null;
    private readonly borderColor: null;
    private readonly textColor: null;
    createRenderRoot() {
        return this;
    }

    // @ts-ignore
    static get properties() {
        return {
            text: {type: String},
            customClass: {type: String},
            borderColor: {type: String},
            textColor: {type: String}
        }
    }

    constructor() {
        super();
        this.text = null;
        this.customClass = null;
        this.borderColor = null;
        this.textColor = null;
    }

    render() {
        return html`
            <button
                    style="${(this.borderColor ? ('border: 1px solid' + this.borderColor + '; ') : '')
                    + (this.textColor ? ('color:' + this.textColor) : '')
                    }"
                    class="button-container ${this.customClass}">
                ${this.text}
            </button>
        `
    }
}