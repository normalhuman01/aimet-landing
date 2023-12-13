import React from 'react'
import Div from '../Div'
import { useTranslation } from "next-i18next";


export default function Newsletter({title, subtitle, placeholder}) {
  const { t } = useTranslation("common");
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <Div className="cs-newsletter cs-style1">
        <form action="#" className="cs-newsletter_form">
          <input type="email" className="cs-newsletter_input" placeholder={placeholder} />
          <button className="cs-newsletter_btn"><span>{t("footer.newsLetter.send")}</span></button>
        </form>
        <Div className="cs-newsletter_text">{subtitle}</Div>
      </Div>
    </>
  )
}
