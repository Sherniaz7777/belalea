import React from 'react'
import "./ContactHero.css"
import { useTranslation } from 'react-i18next'

const ContactHero = () => {

  const {t , i18n} = useTranslation()
  return (
    <div className='ContactHero-all'>
        <div className="container">
            <h1>{t("Контакты")}</h1>
        </div>
    </div>
  )
}

export default ContactHero