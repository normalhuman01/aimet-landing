import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import { useTranslation } from "next-i18next";
// import './footer.scss'

export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const { t } = useTranslation("common");
  const copyrightLinks = [
    {
      title: t("footer.copyright.title"),
      href: '/'
    },
    {
      title: t("footer.copyright.title2"),
      href: '/'
    }
  ]
  
  const serviceMenu = [
    {
      title: 'UI/UX Design',
      href: '/service/service-details'
    },
    {
      title: 'WP Development',
      href: '/service/service-details'
    },
    {
      title: 'Digital Marketing',
      href: '/service/service-details'
    },
    {
      title: 'React Development',
      href: '/service/service-details'
    },
  ]

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget 
                  logoAlt='Logo'
                  text ={t("footer.text")}
                />
                <SocialWidget/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading={t("footer.services.title")}/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title={t("footer.contactUs")}/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter 
                  title={t("footer.newsLetter.title")}
                  subtitle={t("footer.newsLetter.subtitle")}
                  placeholder={t("footer.newsLetter.placeholder")}
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2022 Aimet.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div>
    </footer>
  )
}
