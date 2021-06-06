import i18n from "i18next";
import {resources} from "./common/messages"
import { initReactI18next } from "react-i18next"; 
//
const langData = resources


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "tm",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;