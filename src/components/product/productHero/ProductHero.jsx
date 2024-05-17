import React from 'react'
import "./ProductHero.css"
import { useTranslation } from 'react-i18next'

const ProductHero = () => {

  const {t, i18n} = useTranslation()
  return (
    <div className='ProductHero'>
        <div className="container">
            <h1>{t("Каталог")}</h1>
        </div>
    </div>
  )
}

export default ProductHero