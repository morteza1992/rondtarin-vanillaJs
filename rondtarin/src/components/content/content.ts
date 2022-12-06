import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import './style/content.scss'
import banner from '../../assets/images/homeBanner.svg'
import golden from '../../assets/images/golden.svg'
import silver from '../../assets/images/silver.svg'
import single from '../../assets/images/single.svg'
import pack from '../../assets/images/package.svg'
import arrowDown from '../../assets/images/arrowDown.svg'
import filter from '../../assets/images/Filter.svg'
import watch from '../../assets/images/watch.svg'

// @ts-ignore
// @ts-ignore
/**
 * An example element.
 *
 * @slot - This element has a slot
 */
@customElement('content-element')
export class ContentElement extends LitElement {
    private boxArray: Array<any>;
    private dataArray: Array<any>;

    createRenderRoot() {
        return this;
    }


    constructor() {
        super();
        this.boxArray = [
            {
                title: 'حراج طلایی',
                text: 'شماره‌های محبوب',
                icon: golden
            },
            {
                title: 'حراج نقره ای',
                text: 'حراج‌های کم‌رقابت',
                icon: silver
            },
            {
                title: 'تک‌پیشنهاد',
                text: 'حراج‌های بدون رقابت',
                icon: single
            },
            {
                title: 'حراج بسته‌ای',
                text: 'فروش عمده',
                icon: pack
            },
        ]
        this.dataArray = [
            {
                mobile: '۰۹۱۲۳۴۵۶۷۸۹',
                price: {
                    key: 'قیمت پایه:',
                    value: '۴,۴۳۳,۳۰۰,۰۰۰'
                },
                requests: 'بدون پیشنهاد',
                time: '۰۰:۱۹:۲۲',
                textButton: 'شروع حراج'
            },
            {
                mobile: '۰۹۱۲۳۴۵۶۷۸۹',
                price: {
                    key: 'قیمت پایه:',
                    value: '۴,۴۳۳,۳۰۰,۰۰۰'
                },
                requests: 'بدون پیشنهاد',
                time: '۰۰:۱۹:۲۲',
                textButton: 'شروع حراج'
            },
            {
                mobile: '۰۹۱۲۳۴۵۶۷۸۹',
                price: {
                    key: 'قیمت پایه:',
                    value: '۴,۴۳۳,۳۰۰,۰۰۰'
                },
                requests: 'بدون پیشنهاد',
                time: '۰۰:۱۹:۲۲',
                textButton: 'شروع حراج'
            },
            {
                mobile: '۰۹۱۲۳۴۵۶۷۸۹',
                price: {
                    key: 'قیمت پایه:',
                    value: '۴,۴۳۳,۳۰۰,۰۰۰'
                },
                requests: 'بدون پیشنهاد',
                time: '۰۰:۱۹:۲۲',
                textButton: 'شروع حراج'
            }
        ]
    }

    render() {
        const boxTemplates = [];
        this.boxArray.map((el) => {
            boxTemplates.push(html`
                <div class="box">
                    <div>

                    </div>
                    <div class="text">
                        <div>${el.title}</div>
                        <div>${el.text}</div>
                    </div>
                    <div>
                        <img src="${el.icon}" alt="">
                    </div>
                </div>
            `);
        })

        const itemTemplates = [];
        this.dataArray.map((el, index) => {
            itemTemplates.push(html`
                <div class="row ${index % 2 == 0 ? 'backGroundColored' : ''}">
                    <div class="section">
                        <div class="column">
                            <div class="mobile">${el.mobile}</div>
                        </div>
                        <div class="column" id="price">
                            <div>${el.price.key}</div>
                            <div>
                                <span>${el.price.value}</span>
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
                                <img src="${watch}" alt="">
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
            <div class="content-container">
                <div class="bannerContainer">
                    <img src="${banner}" alt="">
                </div>
                <div class="text-container">
                    <div class="title">
                        <span>خرید سیم‌کارت‌ در</span>
                        <span class="purple">حــراج</span>
                    </div>
                    <div class="text">
                        رندترین مرجع رسمی همراه اول برای فروش سیمکارت به صورت حراج است. شما می‌توانید با پیشنهاد
                        بالاترین قیمت، به سادگی سیم‌کارت مدنظرتان را بخرید.
                    </div>
                </div>
                <div class="items-container">
                    <div class="box-content">
                        <div class="box-container">
                            ${boxTemplates}
                        </div>
                        <div class="mobile-drop-down">
                            <div class="text">
                                <div>حراج طلایی</div>
                                <div>شماره‌های محبوب</div>
                            </div>
                            <img src="${arrowDown}" alt="">
                        </div>
                        <div class="mobile-box">
                            <div class="text">فیلتر</div>
                            <img src="${filter}" alt="">
                        </div>
                    </div>
                    <div class="filter-container">
                        <div class="box">
                            <div class="text">قیمت (تومان):</div>
                            <div class="input">
                                <input type="range" name="" id="">
                                <div>از ۱,۲۰۰,۰۰۰۰۰</div>
                                <div>تا ۱۴,۲۰۰,۰۰۰</div>
                            </div>

                        </div>
                        <div class="box">
                            <div class="text">پیش شماره</div>
                            <img src="${arrowDown}" alt="">
                        </div>
                        <div class="box">
                            <div class="text">کارکرد</div>
                            <img src="${arrowDown}" alt="">
                        </div>
                        <div class="box">
                            <div class="text">مرتب‌سازی</div>
                            <img src="${arrowDown}" alt="">
                        </div>
                    </div>
                    <div class="items">
                        ${itemTemplates}
                    </div>
                </div>

            </div>
        `
    }
}