import { IndexView } from "@/views/Index";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetchAPI } from "@/lib/strapi/api";

const Index = () => {
  const { t } = useTranslation("index");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <IndexView />
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

  const teamAimet = await fetchAPI("/team-aimets", {
    populate: "*",
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return [];
    });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "index"])),
      initialData: { portfolioProjects, teamAimet },
    },
    // revalidate: 300,
  };
}

export default Index;
