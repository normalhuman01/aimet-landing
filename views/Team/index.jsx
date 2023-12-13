import React, { useEffect } from "react";
import Cta from "@/components/Cta";
import PageHeading from "@/components/PageHeading";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import Team from "@/components/Team";
import { useTranslation } from "next-i18next";
import { useStore } from "@/store";

export function TeamView() {
  const { t } = useTranslation("team");
  const { teamAimet } = useStore();

  const teamData = teamAimet.map(
    ({
      attributes: {
        imagen,
        nombre,
        especialidad,
        linkedin,
        twitter,
        facebook,
        github,
      },
    }) => ({
      memberImage: imagen.data.attributes.url,
      memberName: nombre,
      memberDesignation: especialidad,
      memberSocial: {
        linkedin,
        twitter,
        github,
        facebook,
      },
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title={t("heading.titlePrincipal.title")}
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText={t("heading.titlePrincipal.pageLinkText")}
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title={t("heading.container")}
          subtitle={t("heading.subtitle")}
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title={t("heading.cta.title")}
            btnText={t("heading.cta.btnText")}
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
