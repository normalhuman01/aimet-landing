import { useEffect } from "react";

import Card from "@/components/Card";
import FunFact from "@/components/FunFact";
import Hero from "@/components/Hero";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import Cta from "@/components/Cta";
import LogoList from "@/components/LogoList";
import MovingText from "@/components/MovingText";
import PortfolioSlider from "@/components/Slider/PortfolioSlider";
import PostSlider from "@/components/Slider/PostSlider";
import TestimonialSlider from "@/components/Slider/TestimonialSlider";
import TeamSlider from "@/components/Slider/TeamSlider";
import VideoModal from "@/components/VideoModal";
import TimelineSlider from "@/components/Slider/TimelineSlider";
import { useTranslation } from "next-i18next";

export function IndexView() {
  const { t } = useTranslation("index");

  // Hero Social Links
  const heroSocialLinks = [
    {
      name: "Behance",
      links: "/",
    },
    {
      name: "Twitter",
      links: "/",
    },
  ];

  // FunFact Data
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
      {/* Start Hero Section */}
      <Hero
        title={
          <>
            {t("hero.title")} <br />
            {t("hero.title2")}
          </>
        }
        subtitle={t("subtitle")}
        // subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnText={t("hero.btnText")}
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading={t("hero.socialLinksHeading")}
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/home/pintura-neon-abstracta.jpg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title={t("funfact.title")}
          subtitle={t("funfact.subtitle")}
          data={funfactData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title={t("services.title")}
                subtitle={t("services.subtitle")}
                btnText={t("services.btnText")}
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX Design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title={t("portfolio.title")}
            subtitle={t("portfolio.subtitle")}
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title={t("awards.title")}
                subtitle={t("awards.subtitle")}
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          {t("videoBlock.text")}
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title={<>{t("team.title")} <br/>{t("team.title2")}</>}
          subtitle={t("team.subtitle")}
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* <SectionSliderPosts /> */}

      {/* Start MovingText Section */}
      {/* <Spacing lg="125" md="70" />
      <MovingText text={t("movingText.text")} />
      <Spacing lg="105" md="70" /> */}
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title={<>{t("cta.title")} <br />{t("cta.title2")} <i className="mr-2">{t("cta.title3")}</i> {t("cta.title4")}</>}
          btnText={t("cta.btnText")}
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
