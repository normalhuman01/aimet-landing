
import Link from 'next/link';
import Div from '../Div';
import { useTranslation } from "next-i18next";

export default function PageHeading({ title, bgSrc, pageLinkText }) {
  const { t } = useTranslation("common");

  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in flex flex-column items-center">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          <ol className="breadcrumb text-uppercase m-0">
            <li className="breadcrumb-item">
              <Link href="/">{t("pageHeading.home")}</Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}
