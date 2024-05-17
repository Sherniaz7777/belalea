import React from 'react'
import ProductHero from '../components/product/productHero/ProductHero'
import FooterTop from '../components/footer/FooterTop'
import ProductShop from '../components/product/productShop/ProductShop'

const Product = () => {
  return (
    <div>
        <ProductHero/>
        <ProductShop/>
        <FooterTop/>
    </div>
  )
}

export default Product