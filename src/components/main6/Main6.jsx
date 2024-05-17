import React from 'react'
import "./Main6.css"
import { useTranslation } from 'react-i18next'

const Main6 = () => {

  const {t, i18n} = useTranslation()
  return (
    <div>
        <div className="Main6-in">
            <div className="Gallery-1">
                <button>{t("Натуральные масла")}</button>
            </div>
            <div className="Gallery-2">
                <button>{t("НОВИНКИ")}</button>
            </div>
            <div className="Gallery-3">
                   <button>{t("Полезная мука")}</button> 
            </div>
        </div>
    </div>
  )
}

export default Main6