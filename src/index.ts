export { px } from "./deepmerge";

type StyleSheetLike = {};

type ConfigSchema = Record<string, Record<string, StyleSheetLike>>;

type Config<T> = T extends ConfigSchema
  ? {
      variants?: T;
    }
  : never;

type VariantParameter<T> = T extends ConfigSchema
  ? { [K in keyof T]: keyof T[K] }
  : never;

type ApplicationSignature<T> = (
  props: VariantParameter<T>
) => Array<StyleSheetLike>;
type StripSignature<T> = <P>(props: VariantParameter<T> & P) => P;

type ReturnType<T> = {
  applyStyles: ApplicationSignature<T>;
  stripStyles: StripSignature<T>;
};

export type VariantProps<F> = F extends ApplicationSignature<infer T>
  ? { [K in keyof T]: keyof T[K] }
  : never;

export function sva<T>(config: Config<T>): ReturnType<T> {
  function applyStyles(props: VariantParameter<T>): Array<StyleSheetLike> {
    const styles: Array<StyleSheetLike> = [];
    if (!config.variants) {
      return styles;
    }

    for (const [prop, variant] of Object.entries(props) as [keyof T, any]) {
      styles.push(config.variants[prop][variant]);
    }
    return styles;
  }

  function stripStyles<P>(props: VariantParameter<T> & P): P {
    if (!config.variants) {
      return props;
    }

    const rest = { ...props };
    for (const [prop, variant] of Object.entries(props) as [keyof T, any]) {
      delete rest[prop];
    }

    return rest;
  }

  return { applyStyles, stripStyles };
}
