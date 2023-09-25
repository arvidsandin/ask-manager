/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AskManager {
        "setOptions": (userOptions: any) => Promise<void>;
        "showBanner": () => Promise<void>;
    }
    interface MoreOptionsBanner {
        "acceptCategories": (categories: string[]) => void;
        "acceptedCategories": string[];
        "categories": string[];
        "hideOptions": () => void;
    }
    interface PrimaryBanner {
        "acceptCategories": (categories: string[]) => void;
        "categories": string[];
        "showOptions": () => void;
        "stringTokenForLink": string;
    }
}
declare global {
    interface HTMLAskManagerElement extends Components.AskManager, HTMLStencilElement {
    }
    var HTMLAskManagerElement: {
        prototype: HTMLAskManagerElement;
        new (): HTMLAskManagerElement;
    };
    interface HTMLMoreOptionsBannerElement extends Components.MoreOptionsBanner, HTMLStencilElement {
    }
    var HTMLMoreOptionsBannerElement: {
        prototype: HTMLMoreOptionsBannerElement;
        new (): HTMLMoreOptionsBannerElement;
    };
    interface HTMLPrimaryBannerElement extends Components.PrimaryBanner, HTMLStencilElement {
    }
    var HTMLPrimaryBannerElement: {
        prototype: HTMLPrimaryBannerElement;
        new (): HTMLPrimaryBannerElement;
    };
    interface HTMLElementTagNameMap {
        "ask-manager": HTMLAskManagerElement;
        "more-options-banner": HTMLMoreOptionsBannerElement;
        "primary-banner": HTMLPrimaryBannerElement;
    }
}
declare namespace LocalJSX {
    interface AskManager {
    }
    interface MoreOptionsBanner {
        "acceptCategories"?: (categories: string[]) => void;
        "acceptedCategories"?: string[];
        "categories"?: string[];
        "hideOptions"?: () => void;
    }
    interface PrimaryBanner {
        "acceptCategories"?: (categories: string[]) => void;
        "categories"?: string[];
        "showOptions"?: () => void;
        "stringTokenForLink"?: string;
    }
    interface IntrinsicElements {
        "ask-manager": AskManager;
        "more-options-banner": MoreOptionsBanner;
        "primary-banner": PrimaryBanner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ask-manager": LocalJSX.AskManager & JSXBase.HTMLAttributes<HTMLAskManagerElement>;
            "more-options-banner": LocalJSX.MoreOptionsBanner & JSXBase.HTMLAttributes<HTMLMoreOptionsBannerElement>;
            "primary-banner": LocalJSX.PrimaryBanner & JSXBase.HTMLAttributes<HTMLPrimaryBannerElement>;
        }
    }
}
