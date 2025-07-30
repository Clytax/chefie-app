import { i18n } from ".";
import type { TranslationKeys } from "./translation-types";

export const translate = (
  key: TranslationKeys,
  config?: Record<string, unknown>
) => {
  return i18n.t(key, config);
};
