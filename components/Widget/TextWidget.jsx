import React from "react";
import Div from "../Div";
import Logo from "../Logo";

export default function TextWidget({ logoSrc, logoAlt, text }) {
  return (
    <Div className="cs-text_widget">
      <div className="flex items-center">
        <Logo className="mr-3 mb-6" />
      </div>
      <p>{text}</p>
    </Div>
  );
}
