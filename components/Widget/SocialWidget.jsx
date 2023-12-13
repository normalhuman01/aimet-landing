import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget({
  linkedin,
  twitter,
  facebook,
  github,
}) {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href={linkedin || "/"} target="_blank" className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href={twitter || "/"} target="_blank" className="cs-center">
        <Icon icon="fa6-brands:twitter" />               
      </Link>
      <Link href={facebook || "/"} target="_blank" className="cs-center">
        <Icon icon="fa6-brands:facebook" />              
      </Link>
      <Link href={github || "/"} target="_blank" className="cs-center">
        <Icon icon="fa6-brands:github" />
      </Link>
    </Div>
  )
}
