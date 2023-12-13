import { CreativePortfolioView } from "@/views/CreativePortfolio";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CreativePortfolioPage = () => {
  return <CreativePortfolioView />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default CreativePortfolioPage;
