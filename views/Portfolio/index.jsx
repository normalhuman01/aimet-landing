import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import Cta from "@/components/Cta";
import PageHeading from "@/components/PageHeading";
import Portfolio from "@/components/Portfolio";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";
import Spacing from "@/components/Spacing";
import { useStore } from "@/store";

export function PortfolioView() {
  const portfolioProjects = useStore(store => store.portfolioProjects)
  const [active, setActive] = useState("all");
  const [itemShow, setItemShow] = useState(7);

  const portfolioData = portfolioProjects.map(({ attributes }) => {
    const {
      title,
      Category,
      slug,
      image: {
        data: {
          attributes: { url: image },
        },
      },
    } = attributes;
    return {
      title,
      subtitle: "See Details",
      href: "/portfolio/" + slug,
      src: image,
      category: Category,
    };
  });

  const categoryMenu = [...new Set(portfolioData.map((p) => p.category))].map(
    (category) => ({
      category,
      title: category,
    })
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title="Portfolio"
        bgSrc="/images/portfolio_hero_bg.jpeg"
        pageLinkText="Portfolio"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <Div className="cs-portfolio_1_heading">
          <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
          <Div className="cs-filter_menu cs-style1">
            <ul className="cs-mp0 cs-center">
              <li className={active === "all" ? "active" : ""}>
                <span onClick={() => setActive("all")}>All</span>
              </li>
              {categoryMenu.map((item, index) => (
                <li
                  className={active === item.category ? "active" : ""}
                  key={index}
                >
                  <span onClick={() => setActive(item.category)}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </Div>
        </Div>
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 3 || index === 6 ? "col-lg-8" : "col-lg-4"
              } ${
                active === "all"
                  ? ""
                  : !(active === item.category)
                  ? "d-none"
                  : ""
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ""
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
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
