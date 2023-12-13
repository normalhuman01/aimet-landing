import { ServiceDetailsView } from "@/views/ServiceDetails";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const ServiceDetailsPage = () => {
  return (
    <>
      <Head>
        <title>Service - Aimet</title>
      </Head>
      <ServiceDetailsView />
    </>
  );
};

export async function getStaticPaths() {
  const pages = [
    "ui-ux-design",
    "reactjs-development",
    "software-development",
    "digital-marketing",
    "technology",
    "consultancy",
    "creative-design",
  ];

  // esperar soporte de internazionalization en Strapi
  // (https://docs.strapi.io/dev-docs/plugins/i18n)

  const paths = pages
    .map(page => [
      {
        params: { serviceDetailsId: page },
        locale: "en",
      },
      {
        params: { serviceDetailsId: page },
        locale: "es",
      },
    ])
    .flat();

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "service",
        "contact",
        "team",
      ])),
    },
  };
}

export default ServiceDetailsPage;
