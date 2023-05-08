export { px } from "./deepmerge";
type StyleSheetLike = {};
type ConfigSchema = Record<string, Record<string, StyleSheetLike>>;
type Config<T> = T extends ConfigSchema ? {
    variants?: T;
} : never;
type VariantParameter<T> = T extends ConfigSchema ? {
    [K in keyof T]: keyof T[K];
} : never;
type ApplicationSignature<T> = (props: VariantParameter<T>) => Array<StyleSheetLike>;
type StripSignature<T> = <P>(props: VariantParameter<T> & P) => P;
type ReturnType<T> = {
    applyStyles: ApplicationSignature<T>;
    stripStyles: StripSignature<T>;
};
export type VariantProps<F> = F extends ApplicationSignature<infer T> ? {
    [K in keyof T]: keyof T[K];
} : never;
export declare function sva<T>(config: Config<T>): ReturnType<T>;
//# sourceMappingURL=index.d.ts.map