import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
        <div class="nav-container">
            <ul>
                <li>حراج‌های جاری</li>
                <li>سوالات متداول</li>
                <li>قوانین</li>
                <li>راهنمای سایت</li>
                <li>تماس با ما</li>
            </ul>
            <div>
                <button>ورود</button>
                <button>ثبت نام</button>
            </div>
        </div>
        <slot></slot>
        <div class="footer">
           footer
        </div>
    `
  }


  static styles = css`
  .nav-container{
    
  }
  `
}