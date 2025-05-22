"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Laptop, Languages, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Language, useSettingsStore } from "@/stores/theme-store";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect } from "react";

export const allLangs: Language[] = ["en", "vi"];

const LANG_STORAGE_KEY = "i18nextLng";

export function Setting() {
  const {
    theme: currentTheme,
    language: currentLanguage,
    setTheme,
    setLanguage,
  } = useSettingsStore();

  const { i18n } = useTranslation();
  const { t } = useTranslation("dashboard");

  useEffect(() => {
    const getStoredLang = (): Language => {
      const stored = localStorage.getItem(LANG_STORAGE_KEY);
      return (
        allLangs.find((lang) => lang === stored) ||
        allLangs.find((lang) => lang === i18n.language) ||
        allLangs[0]
      );
    };

    const storedLang = getStoredLang();
    setLanguage(storedLang);
    i18n.changeLanguage(storedLang);
  }, [i18n, setLanguage]);

  const handleChangeLang = useCallback(
    (selectedLang: Language) => {
      i18n.changeLanguage(selectedLang);
      localStorage.setItem(LANG_STORAGE_KEY, selectedLang);
      setLanguage(selectedLang);
    },
    [i18n, setLanguage]
  );

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="w-5 h-5">
            <Settings className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-fit px-2">
          <div className="px-2 py-1.5 text-sm font-semibold">
            {" "}
            {t("settings.title")}
          </div>

          {/* Theme selection */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              <span>{t("settings.theme")}</span>
            </div>
            <div className="flex gap-1 mt-1">
              <Button
                variant={currentTheme === "light" ? "secondary" : "ghost"}
                size="sm"
                className="h-8"
                onClick={() => setTheme("light")}
              >
                <Sun className="h-3.5 w-3.5 mr-1" />
                {t("settings.light")}
              </Button>
              <Button
                variant={currentTheme === "dark" ? "secondary" : "ghost"}
                size="sm"
                className="h-8"
                onClick={() => setTheme("dark")}
              >
                <Moon className="h-3.5 w-3.5 mr-1" />
                {t("settings.dark")}
              </Button>
              <Button
                variant={currentTheme === "system" ? "secondary" : "ghost"}
                size="sm"
                className="h-8"
                onClick={() => setTheme("system")}
              >
                <Laptop className="h-3.5 w-3.5 mr-1" />
                {t("settings.system")}
              </Button>
            </div>
          </div>

          <Separator className="my-1" />

          {/* Language selection */}
          <div className="flex flex-col items-start gap-1 ">
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              <span>{t("settings.language")}</span>
            </div>
            <div className="flex gap-1 mt-1">
              <Button
                variant={currentLanguage === "vi" ? "secondary" : "ghost"}
                size="sm"
                className="h-8"
                onClick={() => handleChangeLang("vi")}
              >
                {t("settings.vi")}
              </Button>
              <Button
                variant={currentLanguage === "en" ? "secondary" : "ghost"}
                size="sm"
                className="h-8"
                onClick={() => handleChangeLang("en")}
              >
                {t("settings.en")}
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
