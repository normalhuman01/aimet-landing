import { useMemo } from "react";
import { fetchAPI } from "@/lib/strapi/api";
import { PortfolioDetailsView } from "@/views/PortfolioDetails";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const PortfolioDetailsPage = ({ project }) => {
  const { t } = useTranslation("portfolioDetails");
  const title = useMemo(() => {
    const parts = [t("metaTitle"), project?.attributes?.title, "Aimet"].filter(
      (p) => p
    );
    return parts.join(" - ");
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PortfolioDetailsView project={project} />
    </>
  );
};

export async function getStaticProps({
  locale,
  params: { portfolioDetailsId },
}) {
  const portfolioProjects = await fetchAPI("/portfolio-projects", {
    populate: "*",
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return [];
    });

  const project = portfolioProjects.find(
    ({ attributes: { slug } }) => slug === portfolioDetailsId
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "portfolioDetails"])),
      project,
      initialData: { portfolioProjects },
    },
    // revalidate: 300,
  };
}

export async function getStaticPaths() {
  const data = await fetchAPI("/portfolio-projects")
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return [];
    });

  // esperar soporte de internazionalization en Strapi
  // (https://docs.strapi.io/dev-docs/plugins/i18n)

  const paths = data
    .map(({ attributes: { slug } }) => [
      {
        params: { portfolioDetailsId: slug },
        locale: "en",
      },
      {
        params: { portfolioDetailsId: slug },
        locale: "es",
      },
    ])
    .flat();

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export default PortfolioDetailsPage;
