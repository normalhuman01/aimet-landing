import { CaseStudyShowcaseView } from "@/views/CaseStudyShowcase";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const CaseStudyShowcasePage = () => {
  return <CaseStudyShowcaseView />;
};


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default CaseStudyShowcasePage;
