import type { CSSProperties, HTMLAttributes } from 'react';

export interface CSSPropertiesWithVariable extends CSSProperties {
  [key: `--${string}`]: string | number;
}

export type StyleWithVariable<V extends string = never> = CSSProperties &
  Partial<Record<V, string>>;

export type HTMLAttributeWithStyleVariable<T, C extends string = never> = HTMLAttributes<T> & {
  style?: StyleWithVariable<C>;
};
