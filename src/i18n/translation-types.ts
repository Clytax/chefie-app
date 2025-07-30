import en from "./en-US/translation.json";
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6];

type DeepKeys<T, D extends number = 5> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T & (string | number)]: T[K] extends object
        ? K | Join<K, DeepKeys<T[K], Prev[D]>>
        : K;
    }[keyof T & (string | number)]
  : "";

export type TranslationKeys = DeepKeys<typeof en>;
