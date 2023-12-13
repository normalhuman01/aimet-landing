import React, { createRef, useEffect } from "react";
// import "./hero.scss";
import Button from "../Button";
import Div from "../Div";
import VerticalLinks from "../VerticalLinks";

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  const containerRef = createRef();
  useEffect(() => {
    const handler = ({ x, y }) => {
      const container = containerRef.current;

      if (!container) return;

      const center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      const factor = 600;

      const percentX = 50 + (center.x - x) / factor;
      const percentY = 50 + (center.y - y) / factor;

      container.style.backgroundPositionX = `${percentX}%`;
      container.style.backgroundPositionY = `${percentY}%`;
    };

    window.addEventListener("mousemove", handler);

    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return (
    <Div
      ref={containerRef}
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{title}</h1>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
