import React from 'react'
import "./AboutHer.css"
import { useTranslation } from 'react-i18next'

const AboutHero = () => {
  

  const {t, i18n}= useTranslation()
  return (
    <div className='AboutHero'>
        <div className="container">
          
            <h1>{t("О нас")}</h1>
        </div>
    </div>
  )
}

export default AboutHero