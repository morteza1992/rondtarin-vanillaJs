import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import './style/footer.scss'
import footerLogo from '../../assets/images/footerLogo.svg'
import footerLogo2 from '../../assets/images/footerLogo2.svg'
import telegram from '../../assets/images/telegram.svg'
import instagram from '../../assets/images/instagram.svg'
import message from '../../assets/images/message.svg'
import arrowDown from '../../assets/images/arrowDown.svg'
import setareAval from '../../assets/images/setareAval.svg'
import firstStar from '../../assets/images/firstStar.svg'
import setareSim from '../../assets/images/setareSim.svg'

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
            <div class="footer-container">
                <div class="right">
                    <ul>
                        <li>حراج طلایی</li>
                        <li>راهنمای سایت</li>
                        <li>تماس با ما</li>
                        <li>حراج نقره‌ای</li>
                        <li>سوالات متداول</li>
                        <li>درباره ما</li>
                        <li>تک‌‌پیشنهاد</li>
                        <li>اطلاعیه‌ها</li>
                        <li></li>
                        <li>بسته‌ای</li>
                        <li>قوانین</li>
                        <li></li>
                    </ul>
                    <div class="social-media">
                        <div class="box">
                            <img src="${telegram}" alt="تلگرام">
                            <span>تلگرام</span>
                        </div>
                        <div class="box">
                            <img src="${instagram}" alt="اینستاگرام">
                            <span>اینستاگرام</span>
                        </div>
                        <div class="box">
                            <img src="${message}" alt="ایمیل گرام">
                            <span>ایمیل گرام</span>
                        </div>
                    </div>
                </div>
                <div class="left">
                    <img width="150px" src="${footerLogo}" alt="">
                    <img width="150px" src="${footerLogo2}" alt="">
                </div>
                <div class="text-container">
                    <div class="title">ستاره‌سیم بازار فروش سیم‌کارت</div>
                    <div>ستاره‌سیم پلتفرمی برای خرید و فروش سیم‌کارت است که کاربران می‌توانند در آن آگهی‌های مختلف را
                        ببینند و از میان آنان انتخاب کرده و ستاره‌سیم پلتفرمی برای خرید و فروش سیم‌کارت است که کاربران
                        می‌توانند در آن آگهی‌های مختلف را ببینند و از میان آنان انتخاب کرده و مختلف را ببینند و از میان
                        آنان انتخاب کرده و
                    </div>
                    <a href="">
                        <span>مشاهده بیشتر</span>
                        <img src="${arrowDown}" alt="">
                    </a>
                </div>
                <div class="logos-container">
                    <div class="title">با احترام عضوی از خانواده ستاره‌اول</div>
                    <div class="box-container">
                        <div class="box">
                            <img src="${setareAval}" alt="">
                            <span>ستاره‌اول</span>
                        </div>
                        <div class="box">
                            <img src="${firstStar}" alt="">
                            <span>ستاره یک</span>
                        </div>
                        <div class="box">
                            <img src="${setareSim}" alt="">
                            <span>ستاره‌سیم</span>
                        </div>
                        <div class="box">
                            <img src="${setareSim}" alt="">
                            <span>فروش سازمانی</span>
                        </div>
                        <div class="box">
                            <img src="${setareSim}" alt="">
                            <span>*۱۰۰</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}