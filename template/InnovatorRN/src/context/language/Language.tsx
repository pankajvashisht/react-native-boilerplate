import React, {createContext, useState} from 'react';

export type ILang = {
  code: string;
  name: string;
  image: string;
};

export const LanguageContext = createContext<ILang | undefined>(undefined);
export const LanguageDispatchContext = createContext<((lang: ILang) => void) | undefined>(
  undefined,
);

export function LangProvider({children}: React.PropsWithChildren) {
  const [lang, setLang] = useState({
    code: 'en',
    name: 'English',
    image: 'https://flagcdn.com/24x18/us.png',
  });

  const handleUpdateLang = (langDatum: ILang) => {
    setLang(langData => ({...langData, ...langDatum}));
  };

  return (
    <LanguageContext.Provider value={lang}>
      <LanguageDispatchContext.Provider value={handleUpdateLang}>
        {children}
      </LanguageDispatchContext.Provider>
    </LanguageContext.Provider>
  );
}
