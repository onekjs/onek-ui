declare const _sfc_main: import("vue").DefineComponent<{
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
}, {
    prefix: string;
    props: {
        type: string;
        size: string;
        plain: boolean;
        link: boolean;
        disabled: boolean;
    };
    buttonClasses: import("vue").ComputedRef<{
        [x: string]: string | boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>>, {
    link: boolean;
    type: string;
    size: string;
    plain: boolean;
    disabled: boolean;
}>;
export default _sfc_main;
