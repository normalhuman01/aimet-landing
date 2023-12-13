import { useEffect, useState } from "react";
import { default as Link, default as NavLink } from "next/link";
import SocialWidget from "../Widget/SocialWidget";
import Newsletter from "../Widget/Newsletter";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
import DropDown from "./DropDown";
import Logo from "../Logo";
import { useTranslation } from "next-i18next";
// import "./header.scss";

export default function Header({ variant }) {



  const { t } = useTranslation("common");

  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className='cs-main_header'>
          <Div className='container'>
            <Div className='cs-main_header_in'>
              <Div className='cs-main_header_left'>
                <Link className='cs-site_branding flex items-center' href='/'>
                  <Logo className='mr-2' />
                </Link>
              </Div>
              <Div className='cs-main_header_center'>
                <Div className='cs-nav cs-primary_font cs-medium'>
                  <ul
                    className='cs-nav_list'
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li className='menu-item-has-children'>
                      <NavLink
                        href='/service'
                        onClick={() => setMobileToggle(false)}
                      >
                        {t("header.services")}
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href='/service/software-development'
                              onClick={() => setMobileToggle(false)}
                            >
                              {t("header.softwareDevelopment")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/service/ui-ux-design'
                              onClick={() => setMobileToggle(false)}
                            >
                              {t("header.uiUxDesign")}
                            </Link>
                          </li>
                          <li>
                            <Link
                              href='/service/digital-marketing'
                              onClick={() => setMobileToggle(false)}
                            >
                              {t("header.digitalMarketing")}
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li>
                      <Link
                        href='/portfolio'
                        onClick={() => setMobileToggle(false)}
                      >
                        {t("header.portfolio")}
                      </Link>
                    </li>
                    <li className='menu-item-has-children'>
                      <NavLink
                        href='/about'
                        onClick={() => setMobileToggle(false)}
                      >
                        {t("header.about")}
                      </NavLink>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href='/team'
                              onClick={() => setMobileToggle(false)}
                            >
                              {t("header.team")}
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                    <li className='menu-item-has-children'>
                      <Link
                        href='/contact'
                        onClick={() => setMobileToggle(false)}
                      >
                        {t("header.contact")}
                      </Link>
                      <DropDown>
                        <ul>
                          <li>
                            <Link
                              href='/faq'
                              onClick={() => setMobileToggle(false)}
                            >
                              {t("header.faq")}
                            </Link>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span />
                  </span>
                </Div>
              </Div>
              <Div className='cs-main_header_right'>
                <Div className='cs-toolbox'>
                  <span
                    className='cs-icon_btn'
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className='cs-icon_btn_in'>
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className='cs-close'
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className='cs-side_header_overlay'
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className='cs-side_header_in'>
          <Div className='cs-side_header_shape' />
          <Link
            className='cs-site_branding flex items-center text-white'
            href='/'
          >
            <Logo className='mr-3' />
          </Link>
          <Div className='cs-side_header_box'>
            <h2 className='cs-side_header_heading'>
              {t("heading.headerHeading")} <br /> {t("heading.headerHeading2")}
            </h2>
          </Div>
          <Div className='cs-side_header_box'>
            <ContactInfoWidget title={t("heading.contactUs")} withIcon />
          </Div>
          <Div className='cs-side_header_box'>
            <Newsletter
              title={t("heading.newsLetter.title")}
              subtitle={t("heading.newsLetter.subtitle")}
              placeholder={t("heading.newsLetter.placeholder")}
            />
          </Div>
          <Div className='cs-side_header_box'>
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
