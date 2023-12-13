import { ShowcasePortfolioView } from "@/views/ShowcasePortfolio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ShowcasePortfolioPage = () => {
  return <ShowcasePortfolioView />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ShowcasePortfolioPage;
