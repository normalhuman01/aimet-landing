import React from "react";
import { pageTitle } from "@/helper";
import Div from "@/components/Div";
import SectionHeading from "@/components/SectionHeading";

export function NotFoundView() {
  pageTitle("Error");
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg cs-error_page"
      style={{ backgroundImage: 'url("/images/about_hero_bg.jpeg")' }}
    >
      <Div className="container">
        <SectionHeading
          title={
            <>
              This page could <br />
              not be found.
            </>
          }
          subtitle="404 Error"
          btnText="Back To Home"
          btnLink="/"
          variant="cs-style1 text-center"
        />
      </Div>
    </Div>
  );
}
