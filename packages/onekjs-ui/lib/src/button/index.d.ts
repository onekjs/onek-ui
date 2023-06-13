export declare const Button: import("../../utils/withinstall").SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    link: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    emits: (event: "click", ...args: any[]) => void;
    prefix: string;
    props: {
        type: string;
        size: string;
        plain: boolean;
        link: boolean;
        disabled: boolean;
        loading: boolean;
    };
    isloading: import("vue").ComputedRef<boolean>;
    buttonClasses: import("vue").ComputedRef<{
        [x: string]: string | boolean;
    }>;
    handleClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    size: {
        type: StringConstructor;
        required: false;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    link: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    link: boolean;
    type: string;
    size: string;
    plain: boolean;
    disabled: boolean;
    loading: boolean;
}>>;
export default Button;
