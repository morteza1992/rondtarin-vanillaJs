import { LitElement } from 'lit';
import './theme.scss';
/**
 * An example element.
 *
 * @slot - This element has a slot
 */
export declare class Button extends LitElement {
    private readonly text;
    private readonly customClass;
    private readonly borderColor;
    private readonly textColor;
    private icon;
    createRenderRoot(): this;
    static get properties(): {
        text: {
            type: StringConstructor;
        };
        customClass: {
            type: StringConstructor;
        };
        borderColor: {
            type: StringConstructor;
        };
        textColor: {
            type: StringConstructor;
        };
        icon: {
            type: StringConstructor;
        };
    };
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
export declare class ListElement extends LitElement {
    private itemsArray;
    createRenderRoot(): this;
    static get properties(): {
        itemsArray: {
            type: ArrayConstructor;
        };
    };
    constructor();
    render(): import("lit-html").TemplateResult<1>;
}
