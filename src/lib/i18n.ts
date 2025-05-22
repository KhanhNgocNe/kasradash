import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import dashboardEn from "@/locales/en-EN/dashboard.json"
import dashboardVn from "@/locales/vn-VN/dashboard.json"
import profileEn from "@/locales/en-EN/profile.json"
import profileVn from "@/locales/vn-VN/profile.json";
import { initReactI18next } from "react-i18next";

export enum Locales {
    EnUS = 'en',
    ViVN = 'vi',
  }
const resources = {
  [Locales.EnUS]: {
    dashboard: dashboardEn,
    profile: profileEn
  },
  [Locales.ViVN]: {
    dashboard: dashboardVn,
    profile: profileVn
    
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: Locales.EnUS,
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
