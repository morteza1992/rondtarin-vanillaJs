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
    private icon: any;

    createRenderRoot() {
        return this;
    }

    // @ts-ignore
    static get properties() {
        return {
            text: {type: String},
            customClass: {type: String},
            borderColor: {type: String},
            textColor: {type: String},
            icon: {type: String}
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
                ${this.icon ? html`<img src="${this.icon}" alt="">` : ''}
            </button>
        `
    }
}


@customElement('list-element')
export class ListElement extends LitElement {
    private itemsArray: any[];

    createRenderRoot() {
        return this;
    }

    // @ts-ignore
    static get properties() {
        return {
            itemsArray: {type: Array}
        }
    }

    constructor() {
        super();
        this.itemsArray = []
    }

    render() {
        const itemTemplates: Array<any> = [];
        this.itemsArray.map((el, index) => {
            itemTemplates.push(html`
                <div class="row ${index % 2 == 0 ? 'backGroundColored' : ''}">
                    <div class="section">
                        <div class="column">
                            <div class="mobile">${el.mobile}</div>
                        </div>
                        <div class="column" id="price">
                            <div>${el.price.key}</div>
                            <div>
                                <span class="amount">${el.price.value}</span>
                                <span>ریال</span>
                            </div>
                        </div>
                    </div>
                    <div class="section">
                        <div class="requests">
                            <div class="column">
                                <div>${el.requests}</div>
                            </div>
                            <div class="column">
                                <div>${el.time}</div>
                                <img src="${el.watch}" alt="">
                            </div>
                        </div>
                        <div class="column">
                            <button-element
                                    text="${el.textButton}"
                                    textColor="#525252"
                                    borderColor="#525252"
                                    customClass="action">
                            </button-element>
                        </div>
                    </div>
                </div>
            `);
        })

        return html`
            <div class="items">
                ${itemTemplates}
            </div>`
    }
}