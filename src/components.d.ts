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
    }
}
declare global {
    interface HTMLAskManagerElement extends Components.AskManager, HTMLStencilElement {
    }
    var HTMLAskManagerElement: {
        prototype: HTMLAskManagerElement;
        new (): HTMLAskManagerElement;
    };
    interface HTMLElementTagNameMap {
        "ask-manager": HTMLAskManagerElement;
    }
}
declare namespace LocalJSX {
    interface AskManager {
    }
    interface IntrinsicElements {
        "ask-manager": AskManager;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ask-manager": LocalJSX.AskManager & JSXBase.HTMLAttributes<HTMLAskManagerElement>;
        }
    }
}
