import { NotFoundView } from "@/views/NoutFound";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const NotFoundPage = () => {
  return <NotFoundView />;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default NotFoundPage;
