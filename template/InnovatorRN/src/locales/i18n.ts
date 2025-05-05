import ReactNative from 'react-native';
import I18n, {Scope, TranslateOptions} from 'i18n-js';
// Import all locales
import en from './en.json';
import hi from './hi.json';
// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;
// Define the supported translations
I18n.translations = {
  en,
  hi,
};
const currentLocale = I18n.currentLocale();

export const changeLanguage = (code: string) => {
  I18n.locale = code || 'en';
};
// Is it a RTL language?
export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;
// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(isRTL);
// The method we'll use instead of a regular string
export const strings = (name: Scope, params?: TranslateOptions): string => I18n.t(name, params);
export default I18n;
