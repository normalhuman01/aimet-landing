import { FaqView } from "@/views/Faq";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const FaqPage = () => {
  const { t } = useTranslation("faq");
  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <FaqView />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "faq"])),
    },
  };
}

export default FaqPage;
