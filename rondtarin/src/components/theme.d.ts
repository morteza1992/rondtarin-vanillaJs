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
export declare class WrapperElement extends LitElement {
    private content;
    private visible;
    createRenderRoot(): this;
    static get properties(): {
        content: {
            type: StringConstructor;
        };
        visible: {
            type: BooleanConstructor;
        };
    };
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class BoxElement extends LitElement {
    private element;
    createRenderRoot(): this;
    static get properties(): {
        element: {
            type: ObjectConstructor;
        };
    };
    render(): import("lit-html").TemplateResult<1>;
}
export declare class SelectElement extends LitElement {
    private list;
    private selected;
    private open;
    createRenderRoot(): this;
    static get properties(): {
        list: {
            type: ArrayConstructor;
        };
        selected: {
            type: ObjectConstructor;
        };
    };
    selectRow(el: {
        text: string;
        value: null;
    }): void;
    toggle(): void;
    render(): import("lit-html").TemplateResult<1>;
}
