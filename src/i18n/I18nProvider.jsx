"use client";
import { createContext, useContext, useEffect } from "react";

const I18nContext = createContext(null);

// Gives client components the current language and its dictionary.
// The server layout passes in only the active language's dictionary.
export const I18nProvider = ({ lang, dict, children }) => {
  // Remember the choice so "/" and old links (/about, ...) reopen it.
  useEffect(() => {
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, dict }}>{children}</I18nContext.Provider>
  );
};

export const useI18n = () => {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>");
  return value;
};
