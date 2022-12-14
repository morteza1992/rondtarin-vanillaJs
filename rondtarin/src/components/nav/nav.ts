import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import './style/nav.scss'
// @ts-ignore
import logo from '../../assets/images/rondtarin.svg'
// @ts-ignore
import mobileMenu from '../../assets/images/mobileMenu.svg'
// @ts-ignore
import close from '../../assets/images/close.svg'

// @ts-ignore
/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('nav-element')
export class NavElement extends LitElement {
    private show: boolean;
    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.show = false
    }

    toggleNav() {
        this.show = !this.show
        this.requestUpdate()
    }

    render() {
        return html`
            <div class="nav-container">
                <div class="mobile-Btn-container">
                    <img src="${mobileMenu}" @click="${this.toggleNav}" alt="">
                </div>
                <div class="logo-container">
                    <img class="logo" width="80px" src="${logo}" alt="">
                </div>

                <div class="nav-content ${!this.show ? 'hide-nav' : 'show-nav'}">
                    <ul class="nav">
                        <li class="close-nav"><img src="${close}" @click="${this.toggleNav}" alt=""></li>
                        <li>حراج‌های جاری</li>
                        <li>سوالات متداول</li>
                        <li>قوانین</li>
                        <li>راهنمای سایت</li>
                        <li>تماس با ما</li>
                    </ul>
                </div>

                <div class="login">
                    <button-element
                            text="ورود"
                            textColor="#6F59CA">
                    </button-element>
                    <button-element
                            text="ثبت نام"
                            customClass="login-button"
                            textColor="#6F59CA">
                    </button-element>
                </div>
            </div>
        `
    }
}