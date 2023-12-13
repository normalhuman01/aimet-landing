import { useEffect } from 'react'
import { PortfolioView } from "@/views/Portfolio";
import { fetchAPI } from "@/lib/strapi/api";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { useStore } from "@/store";

const PortfolioPage = ({ initialData: { portfolioProjects } }) => {
  const { t } = useTranslation("portfolio");
  const store = useStore();
  useEffect(() => {
    if (!(store.portfolioProjects?.length > 0)) {
      store.setPortfolioProjects(portfolioProjects);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <PortfolioView />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const portfolioProjects = await fetchAPI("/portfolio-projects", {
    populate: "*",
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return [];
    });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "portfolio"])),
      initialData: { portfolioProjects },
    },
    // revalidate: 300,
  };
}

export default PortfolioPage;
