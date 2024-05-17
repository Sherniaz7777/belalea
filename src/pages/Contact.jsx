import React from 'react'
import ContactHero from '../components/contact/contactHero/ContactHero'
import ContactCon1 from '../components/contact/contactCon1/ContactCon1'
import ContactCon2 from '../components/contact/contactCon2/ContactCon2'
import FooterTop from './../components/footer/FooterTop';
import ContactComment from '../components/contact/contactComment/ContactComment';

const Contact = () => {
  return (
    <div>
        <ContactHero/>
        <ContactCon1/>
        <ContactCon2/>
        <ContactComment/>
        <FooterTop/>
    </div>
  )
}

export default Contact