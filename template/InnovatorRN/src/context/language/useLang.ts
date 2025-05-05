import {useContext} from 'react';
import {LanguageContext, LanguageDispatchContext} from './Language';

export function useLang() {
  return useContext(LanguageContext);
}

export function useSetLang() {
  const setter = useContext(LanguageDispatchContext);
  return setter || (() => {});
}
