import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "en" | "vi"; 

type ThemeState = {
  theme: "light" | "dark" | "system";
  language: Language;
  setTheme: (theme: "light" | "dark" | "system") => void;
  setLanguage: (language: Language) => void;
};

export const useSettingsStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "system",
      language: "en",
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "app-settings",
    }
  )
);
