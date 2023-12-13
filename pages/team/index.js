import { useEffect } from "react";
import { TeamView } from "@/views/Team";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";
import { fetchAPI } from "@/lib/strapi/api";
import { useStore } from "@/store";

const TeamPage = ({ initialData: { teamAimet } }) => {
  const { t } = useTranslation("team");

  const store = useStore();

  useEffect(() => {
    if (!(store.teamAimet?.length > 0)) {
      store.setTeamAimet(teamAimet);
    }
  }, []);
  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <TeamView />
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
      ...(await serverSideTranslations(locale, ["common", "team"])),
      initialData: { teamAimet },
    },
    // revalidate: 300,
  };
}

export default TeamPage;
