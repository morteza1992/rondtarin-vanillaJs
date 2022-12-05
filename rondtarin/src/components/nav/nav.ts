import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import './style/nav.scss'
// @ts-ignore
import logo from '../../assets/images/rondtarin.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('nav-element')
export class NavElement extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="nav-container">
                <img class="logo" width="100px" src="${logo}" alt="">
                <ul class="nav">
                    <li>حراج‌های جاری</li>
                    <li>سوالات متداول</li>
                    <li>قوانین</li>
                    <li>راهنمای سایت</li>
                    <li>تماس با ما</li>
                </ul>
                <div class="login">
                    <button>ورود</button>
                    <button>ثبت نام</button>
                </div>
            </div>
        `
    }
}