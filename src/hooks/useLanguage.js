import { createContext, useContext } from "react";

export const LanguageContext = createContext("en");

export function useLanguage() {
  return useContext(LanguageContext);
}

export function pick(value, language) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[language] ?? value.en;
  }
  return value;
}
