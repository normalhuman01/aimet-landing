import React from 'react'

import Div from '../Div';
// import './iconbox.scss'

export default function IconBox({title, subtitle, icon}) {
  return (
    <Div className="cs-iconbox cs-style1 text-center">
      <Div className="cs-iconbox_icon">
        <img src={icon} alt="Icon" />
      </Div>
      <h2 className="cs-iconbox_title">{(title)}</h2>
      <Div className="cs-iconbox_subtitle">{(subtitle)}</Div>
    </Div>
  )
}
