import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'
import './style/content.scss'
// @ts-ignore
import banner from '../../assets/images/homeBanner.svg'
// @ts-ignore
import golden from '../../assets/images/golden.svg'
// @ts-ignore
import silver from '../../assets/images/silver.svg'
// @ts-ignore
import single from '../../assets/images/single.svg'
// @ts-ignore
import pack from '../../assets/images/package.svg'
// @ts-ignore
import arrowDown from '../../assets/images/arrowDown.svg'
// @ts-ignore
import filter from '../../assets/images/Filter.svg'
// @ts-ignore
import watch from '../../assets/images/watch.svg'
// @ts-ignore
import add from '../../assets/images/add.svg'
// @ts-ignore
import simBanner from '../../assets/images/simBanner.svg'

// @ts-ignore
// @ts-ignore
/**
 * An example element.
 *
 * @slot - This element has a slot
 */
// @ts-ignore
@customElement('content-element')
export class ContentElement extends LitElement {
    private boxArray: Array<any>;
    private readonly itemsArray: Array<any>;
    private readonly showModal: Boolean;

    createRenderRoot() {
        return this;
    }

    constructor() {
        super();
        this.boxArray = [
            {
                title: 'حراج طلایی',
                text: 'شماره‌های محبوب',
                icon: golden,
                backGroundColor: '#FFF6E6'
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
        this.itemsArray = [
            {
                mobile: '۰۹۱۲۳۴۵۶۷۸۹',
                price: {
                    key: 'قیمت پایه:',
                    value: '۴,۴۳۳,۳۰۰,۰۰۰'
                },
                requests: 'بدون پیشنهاد',
                time: '۰۰:۱۹:۲۲',
                textButton: 'شروع حراج',
                icon: watch
            },
            {
                mobile: '۰۹۱۲۳۴۵۶۷۸۹',
                price: {
                    key: 'قیمت پایه:',
                    value: '۴,۴۳۳,۳۰۰,۰۰۰'
                },
                requests: 'بدون پیشنهاد',
                time: '۰۰:۱۹:۲۲',
                textButton: 'شروع حراج',
                icon: watch
            },
            {
                mobile: '۰۹۱۲۳۴۵۶۷۸۹',
                price: {
                    key: 'قیمت پایه:',
                    value: '۴,۴۳۳,۳۰۰,۰۰۰'
                },
                requests: 'بدون پیشنهاد',
                time: '۰۰:۱۹:۲۲',
                textButton: 'شروع حراج',
                icon: watch
            },
            {
                mobile: '۰۹۱۲۳۴۵۶۷۸۹',
                price: {
                    key: 'قیمت پایه:',
                    value: '۴,۴۳۳,۳۰۰,۰۰۰'
                },
                requests: 'بدون پیشنهاد',
                time: '۰۰:۱۹:۲۲',
                textButton: 'شروع حراج',
                icon: watch
            }
        ]
        this.showModal = false
    }

    render() {
        const boxTemplates = [];
        this.boxArray.map((el) => {
            boxTemplates.push(html`
                <box-element
                        .element="${el}">
                </box-element>
            `);
        })

        return html`
            <div class="content-container">
                <div class="banner-container">
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
                        <select-element
                                .list="${
                                        [
                                            {
                                                text: 'پیش شماره',
                                                value: '1'
                                            }
                                        ]}"
                                class="filter">
                        </select-element>
                        <select-element
                                .list="${
                                        [
                                            {
                                                text: 'کارکرد',
                                                value: '1'
                                            }
                                        ]}"
                                class="filter">
                        </select-element>
                        <select-element
                                .list="${
                                        [
                                            {
                                                text: 'مرتب‌سازی',
                                                value: '1'
                                            }
                                        ]}"
                                class="filter">
                        </select-element>
                    </div>
                    <list-element
                            class='listItems'
                            .itemsArray="${this.itemsArray}">
                    </list-element>
                    <div class="show-more">
                        <button-element
                                text="مشاهده بیشتر"
                                customClass="show-more-button"
                                textColor="#6F59CA"
                                borderColor="#6F59CA"
                                icon="${add}">
                        </button-element>
                    </div>
                    <div class="banner-container">
                        <img src="${simBanner}" alt="">
                    </div>
                </div>
            </div>
            <wrapper-element
                    .visible="${this.showModal}"
                    content=${['<div>test</div>']}>

            </wrapper-element>
        `
    }
}