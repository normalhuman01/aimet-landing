import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CustomCursor from "../CustomCursor";
import Footer from "../Footer";
import Header from "../Header";
import WhatsappFloatIcon from "./WhatsappFloatIcon/WhatsappFloatIcon";

export default function Layout({ children,test }) {
  const router = useRouter();

  const variantPages = [
    "/creative-portfolio",
    "/showcase-portfolio",
    "/case-study-showcase",
  ];
  const variant = variantPages.find((url) => url === router.pathname)
    ? "cs-site_header_full_width"
    : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header variant={variant} />
      {children}
      <CustomCursor />
      <Footer />
      <WhatsappFloatIcon/>
    </>
  );
}