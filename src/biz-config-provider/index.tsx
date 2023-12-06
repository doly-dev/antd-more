import React, { useContext } from 'react';
import { merge } from 'ut2';
import zhCN from '../locale/zh_CN';

export type DeepPartial<V> = {
  [K in keyof V]?: V[K] extends object ? DeepPartial<V[K]> : V[K];
};

export type Locale = typeof zhCN;

type Config = {
  locale?: Locale;
  children?: React.ReactNode;
};

export const defaultConfigRef: {
  current: Config;
} = {
  current: {
    locale: zhCN
  }
};

export function setDefaultConfig(config: DeepPartial<Config>) {
  defaultConfigRef.current = merge(defaultConfigRef.current, config);
}

export function getDefaultConfig() {
  return defaultConfigRef.current;
}

const ConfigContext = React.createContext<Config | null>(null);

export type BizConfigProviderProps = Omit<Config, 'locale'> & { locale?: DeepPartial<Locale> };

export const BizConfigProvider: React.FC<BizConfigProviderProps> = (props) => {
  const { children, ...config } = props;
  const parentConfig = useConfig();
  const mergeParentConfig = merge({}, parentConfig);
  const mergeConfig = merge(mergeParentConfig, config);

  return <ConfigContext.Provider value={mergeConfig}>{children}</ConfigContext.Provider>;
};

export function useConfig() {
  return useContext(ConfigContext) ?? getDefaultConfig();
}

export default BizConfigProvider;
