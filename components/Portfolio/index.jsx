import Head from "next/head";
import Link from "next/link";
import Div from "../Div";
// import './portfolio.scss';

export default function Portfolio({ href, src, title, subtitle, variant }) {
  return (
    <>
      <Head>
        <meta name='referrer' content='no-referrer' />
      </Head>

      <Div className={`cs-portfolio cs-bg ${variant ? variant : "cs-style1"}`}>
        <Div className='cs-portfolio_hover' />
        <Div
          className='cs-portfolio_bg cs-bg'
          style={{ backgroundImage: `url("${src}")` }}
        >
          <img
            src={src}
            referrerPolicy='no-referrer'
            alt={title}
            style={{ display: "none" }}
          />
        </Div>
        <Div className='cs-portfolio_info'>
          <Div className='cs-portfolio_info_bg cs-accent_bg' />
          <h2 className='cs-portfolio_title'>{title}</h2>
          <Link href={href} className='cs-portfolio_subtitle'>
            {subtitle}
          </Link>
        </Div>
      </Div>
    </>
  );
}
