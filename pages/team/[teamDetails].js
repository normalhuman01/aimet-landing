import { fetchAPI } from "@/lib/strapi/api";
import { TeamDetailsView } from "@/views/TeamDetails";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const TeamDetailsPage = ({ member }) => {
  return (
    <>
      <Head>
        <title>Team - Aimet</title>
      </Head>
      <TeamDetailsView member={member} />
    </>
  );
};

export async function getStaticProps({ locale,
  params: { teamDetails },
 }) {
  const teamAimet = await fetchAPI("/team-aimets", {
    populate: "*",
  })
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return [];
    });

    const member = teamAimet.find(
      ({ attributes: { nombre } }) => nombre.replaceAll(" ", "-") === teamDetails
    );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "team"])),
      member,
      initialData: { teamAimet },
    },
    // revalidate: 300,
  };
}

export async function getStaticPaths() {
  const data = await fetchAPI("/team-aimets")
    .then((res) => res.data)
    .catch((error) => {
      console.log(error);
      return [];
    });

  // esperar soporte de internazionalization en Strapi
  // (https://docs.strapi.io/dev-docs/plugins/i18n)

  const paths = data
    .map(({ attributes: { nombre } }) => [
      {
        params: { teamDetails: nombre.replaceAll(" ", "-") },
        locale: "en",
      },
      {
        params: { teamDetails: nombre.replaceAll(" ", "-") },
        locale: "es",
      },
    ])
    .flat();

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export default TeamDetailsPage;
