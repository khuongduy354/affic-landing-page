import { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "@/translations";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (obj: Record<Language, string> | readonly string[]) => string;
  tArr: (obj: Record<Language, string[]> | Record<Language, readonly string[]>) => string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("affic-lang") as Language | null;
    if (stored === "vi" || stored === "en") {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "vi" : "en";
    setLang(newLang);
    localStorage.setItem("affic-lang", newLang);
  };

  // Translate a { en: "...", vi: "..." } object
  const t = (obj: Record<Language, string> | readonly string[]): string => {
    if (Array.isArray(obj)) return (obj as string[])[0] || "";
    return (obj as Record<Language, string>)[lang] || (obj as Record<Language, string>)["en"];
  };

  // Translate a { en: [...], vi: [...] } object
  const tArr = (obj: Record<Language, string[]> | Record<Language, readonly string[]>): string[] => {
    return [...(obj[lang] || obj["en"])];
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t, tArr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
