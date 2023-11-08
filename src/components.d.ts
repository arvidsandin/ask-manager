/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Options } from "./utils/options";
export { Options } from "./utils/options";
export namespace Components {
    interface AskManager {
        /**
          * Delete all previous set consents
         */
        "deleteConsent": () => Promise<void>;
        /**
          * Get the categories that the user has consented to
          * @returns An array with the keys of all cookies that the user has consented to
         */
        "getCategoriesWithConsent": () => Promise<any[]>;
        /**
          * Check if the user has conseted to a particular category
          * @param key The category of cookie to check consent status for
          * @returns Whether the user has consented to that cookie
         */
        "hasConsent": (key: string) => Promise<boolean>;
        /**
          * Set the options used for the component. Is required to run at initialization, but can be run any number of times after that
          * @param userOptions The Options object that contains the settings for the component
         */
        "setOptions": (userOptions: Options) => Promise<void>;
        /**
          * Make the banner reappear
         */
        "showBanner": () => Promise<void>;
    }
    interface FloatingCookieButton {
        "changeColor": (background: string, foreground: string) => Promise<void>;
        "showBanner": () => void;
    }
    interface MoreOptionsBanner {
        /**
          * A function to use when accepting categories
         */
        "acceptCategories": (categories: string[]) => void;
        /**
          * The categories that are already accepted and should be shown as pre-checked to the user
         */
        "acceptedCategories": string[];
        /**
          * A function to no longer set the options view as the active one
         */
        "hideOptions": () => void;
    }
    interface PrimaryBanner {
        /**
          * A function to use when accepting categories
         */
        "acceptCategories": (categories: string[]) => void;
        /**
          * A function to set the options view as the active one
         */
        "showOptions": () => void;
    }
}
export interface AskManagerCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAskManagerElement;
}
declare global {
    interface HTMLAskManagerElement extends Components.AskManager, HTMLStencilElement {
    }
    var HTMLAskManagerElement: {
        prototype: HTMLAskManagerElement;
        new (): HTMLAskManagerElement;
    };
    interface HTMLFloatingCookieButtonElement extends Components.FloatingCookieButton, HTMLStencilElement {
    }
    var HTMLFloatingCookieButtonElement: {
        prototype: HTMLFloatingCookieButtonElement;
        new (): HTMLFloatingCookieButtonElement;
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
        "floating-cookie-button": HTMLFloatingCookieButtonElement;
        "more-options-banner": HTMLMoreOptionsBannerElement;
        "primary-banner": HTMLPrimaryBannerElement;
    }
}
declare namespace LocalJSX {
    interface AskManager {
        /**
          * Event when the user has updated their consent
          * @event consentUpdated
          * @property {string[]} detail - An array with the keys of all cookies that the user has consented to
         */
        "onConsentUpdated"?: (event: AskManagerCustomEvent<string[]>) => void;
    }
    interface FloatingCookieButton {
        "showBanner"?: () => void;
    }
    interface MoreOptionsBanner {
        /**
          * A function to use when accepting categories
         */
        "acceptCategories"?: (categories: string[]) => void;
        /**
          * The categories that are already accepted and should be shown as pre-checked to the user
         */
        "acceptedCategories"?: string[];
        /**
          * A function to no longer set the options view as the active one
         */
        "hideOptions"?: () => void;
    }
    interface PrimaryBanner {
        /**
          * A function to use when accepting categories
         */
        "acceptCategories"?: (categories: string[]) => void;
        /**
          * A function to set the options view as the active one
         */
        "showOptions"?: () => void;
    }
    interface IntrinsicElements {
        "ask-manager": AskManager;
        "floating-cookie-button": FloatingCookieButton;
        "more-options-banner": MoreOptionsBanner;
        "primary-banner": PrimaryBanner;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ask-manager": LocalJSX.AskManager & JSXBase.HTMLAttributes<HTMLAskManagerElement>;
            "floating-cookie-button": LocalJSX.FloatingCookieButton & JSXBase.HTMLAttributes<HTMLFloatingCookieButtonElement>;
            "more-options-banner": LocalJSX.MoreOptionsBanner & JSXBase.HTMLAttributes<HTMLMoreOptionsBannerElement>;
            "primary-banner": LocalJSX.PrimaryBanner & JSXBase.HTMLAttributes<HTMLPrimaryBannerElement>;
        }
    }
}
