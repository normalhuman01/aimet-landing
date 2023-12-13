import React, { useEffect } from "react";
import { pageTitle } from "@/helper";
import Cta from "@/components/Cta";
import FunFact from "@/components/FunFact";
import PageHeading from "@/components/PageHeading";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";
import TeamSlider from "@/components/Slider/TeamSlider";
import Spacing from "@/components/Spacing";
import { useTranslation } from "next-i18next";

export function AboutView() {
const { t } = useTranslation("about");

pageTitle("About");

const funfactData = [
  {
    title: t("funfactData.title1"),
    factNumber: "40K",
  },
  {
    title: t("funfactData.title2"),
    factNumber: "50K",
  },
  {
    title: t("funfactData.title3"),
    factNumber: "245",
  },
  {
    title: t("funfactData.title4"),
    factNumber: "550",
  },
];
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
return (
  <>
    {/* Start Page Heading Section */}
    <PageHeading
      title={t("heading.title")}
      bgSrc="/images/about_hero_bg.jpeg"
      pageLinkText="About Us"
    />
    {/* End Page Heading Section */}

    {/* Start About Section */}
    <Spacing lg="150" md="80" />
    <Div className="container">
      <Div className="row">
        <Div className="col-xl-5 col-lg-7">
          <SectionHeading
            title={t("aboutHeading.title")}
            subtitle={t("aboutHeading.subtitle")}
          >
            <Spacing lg="30" md="20" />
            <p className="cs-m0">
              {t("aboutHeading.paragraph")}
            </p>
            <Spacing lg="30" md="30" />
            <Div className="cs-separator cs-accent_bg"></Div>
            <Spacing lg="25" md="40" />
          </SectionHeading>
        </Div>
        <Div className="col-lg-5 offset-xl-2">
          <img
            src="/images/about_img_1.jpeg"
            alt="About"
            className="w-100 cs-radius_15"
          />
          <Spacing lg="25" md="25" />
        </Div>
        <Div className="col-lg-7">
          <img
            src="/images/about_img_2.jpeg"
            alt="About"
            className="w-100 cs-radius_15"
          />
          <Spacing lg="25" md="25" />
        </Div>
        <Div className="col-lg-5">
          <img
            src="/images/about_img_3.jpeg"
            alt="About"
            className="w-100 cs-radius_15"
          />
          <Spacing lg="25" md="25" />
        </Div>
      </Div>
    </Div>
    <Spacing lg="75" md="55" />
    {/* End About Section */}

    {/* Start Fun Fact Section */}
    <Div className="container">
      <FunFact
        title={t("funfact.title")}
        subtitle={t("funfact.subtitle")}
        data={funfactData}
      />
    </Div>
    {/* End Fun Fact Section */}

    {/* Start Why Choose Section */}
    <Spacing lg="100" md="80" />
    <Div className="container">
      <Div className="row">
        <Div className="col-xl-5 col-lg-6">
          <Div className="cs-image_layer cs-style1">
            <Div className="cs-image_layer_in">
              <img
                src="/images/about_img_4.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
            </Div>
          </Div>
          <Spacing lg="0" md="40" />
        </Div>
        <Div className="col-xl-5 offset-xl-1 col-lg-6">
          <SectionHeading
            title={t("whyChooseUs.title")}
            subtitle={t("whyChooseUs.subtitle")}
          >
            <Spacing lg="30" md="20" />
            <p className="cs-m0">
              {t("whyChooseUs.paragraph")}
            </p>
            <Spacing lg="15" md="15" />
            <p className="cs-m0">
            {t("whyChooseUs.paragraph2")}
            </p>
            <Spacing lg="30" md="30" />
            <Div className="cs-separator cs-accent_bg"></Div>
            <Spacing lg="25" md="0" />
          </SectionHeading>
        </Div>
      </Div>
    </Div>
    {/* End Why Choose Section */}

    {/* Start Team Section */}
    <Spacing lg="145" md="80" />
    <Div className="container">
      <SectionHeading
        title={
          <>
            {t("team.title")} <br />
            {t("team.title2")}
          </>
        }
        subtitle={t("team.subtitle")}
        variant="cs-style1"
      />
      <Spacing lg="85" md="45" />
      <TeamSlider />
    </Div>
    {/* End Team Section */}

    {/* Start CTA Section */}
    <Spacing lg="150" md="80" />
    <Div className="container">
      <Cta
        title={
          <>
            {t("cta.title")} <br />
            {t("cta.title2")} <i>{t("cta.title3")}</i> {t("cta.title4")}
          </>
        }
        btnText={t("cta.btnText")}
        btnLink="/contact"
        bgSrc="/images/cta_bg.jpeg"
      />
    </Div>
    {/* End CTA Section */}
  </>
);
}
