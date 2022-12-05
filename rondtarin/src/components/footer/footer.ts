import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import './style/footer.scss'

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('footer-element')
export class FooterElement extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="footer">
                footer
            </div>
        `
    }
}