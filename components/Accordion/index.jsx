import React from "react";
import { useState } from "react";
import Div from "../Div";
import { useTranslation } from "next-i18next";
export default function Accordion() {
  const { t } = useTranslation("faq");

  const [selected, setSelected] = useState(0);
  const handelToggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  const accordionData = [
    {
      question: t("preguntas.pregunta1"),
      answer: t("preguntas.respuesta1"),
    },
    {
      question: t("preguntas.pregunta2"),
      answer: t("preguntas.respuesta2"),
    },
    {
      question: t("preguntas.pregunta3"),
      answer: t("preguntas.respuesta3"),
    },
    {
      question: t("preguntas.pregunta4"),
      answer: t("preguntas.respuesta4"),
    },
    {
      question: t("preguntas.pregunta5"),
      answer: t("preguntas.respuesta5"),
    },
  ];
  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? "active" : ""}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
