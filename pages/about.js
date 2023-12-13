import { AboutView } from "@/views/About";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { fetchAPI } from "@/lib/strapi/api";

const AboutPage = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <AboutView />
    </>
  );
};

export async function getStaticProps({ locale }) {
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
      ...(await serverSideTranslations(locale, ["common", "about"])),
      initialData: { teamAimet },
    },
  };
}

export default AboutPage;
