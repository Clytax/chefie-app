// (root)/src/lib/i18n.ts
import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";
import en from "./en-US/translation.json";
import de from "./de-DE/translation.json";

export const deviceLanguage = getLocales()?.[0]?.languageCode ?? "en";

const i18n = new I18n({
  en,
  de,
});

i18n.defaultLocale = deviceLanguage;

i18n.locale = deviceLanguage;

const changeLanguage = (lang: string) => {
  i18n.locale = lang;
};

export { i18n, changeLanguage };
