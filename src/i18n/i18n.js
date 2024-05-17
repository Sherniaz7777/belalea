import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import KG from "./kg/kg.json"
import RU from "./ru/ru.json"



const resources={
    ru: {
        translation: RU,
    }, 
    kg: {
        translation: KG,
    }
}

await i18next.use(initReactI18next).init({
    resources,
    lng:'ru',
    fallbackLng:'kg',

})

export default i18next