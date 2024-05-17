import React from 'react'
import "./BlogHero.css"
import { useTranslation } from 'react-i18next'


const BlogHero = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className='BlogHero'>
         <div className="container">
              <h1>{t("Новости")}</h1>
         </div>
    </div>
  )
}

export default BlogHero