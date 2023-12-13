import React, { useEffect } from "react";
import Button from "@/components/Button";
import Cta from "@/components/Cta";
import PageHeading from "@/components/PageHeading";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import { useRouter } from "next/router";

export function PortfolioDetailsView({ project }) {
  const router = useRouter();
  const params = router.query;

  const {
    attributes: {
      title,
      Category: category,
      description,
      image: {
        data: {
          attributes: { url: image },
        },
      },
      portfolio_project_details: { data: dataDetails },
    },
  } = project;

  const details = dataDetails.map(({ attributes, id }) => ({
    ...attributes,
    id,
  }));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title={title}
        bgSrc="/images/service_hero_bg.jpeg"
        pageLinkText={params.portfolioDetailsId}
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <img
          src={image}
          referrerPolicy="no-referrer"
          alt="Details"
          className="cs-radius_15 w-100"
        />
        <Spacing lg="90" md="40" />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading title={title} subtitle={category}>
              <Spacing lg="40" md="20" />
              <p>{description}</p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 className="cs-font_30 cs-font_26_sm cs-m0">Project Info -</h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              {details.map(({ id, label, content }) => (
                <Div className="col-6" key={id}>
                  <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                    {label}:
                  </h3>
                  <p className="cs-m0">{content}</p>
                  <Spacing lg="30" md="30" />
                </Div>
              ))}
            </Div>
          </Div>
        </Div>
        <Spacing lg="65" md="10" />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Prev Project"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button
              btnLink="/portfolio/portfolio-details"
              btnText="Next Project"
            />
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      <Cta
        title="agency@arino.com"
        bgSrc="/images/cta_bg_2.jpeg"
        variant="rounded-0"
      />
    </>
  );
}
