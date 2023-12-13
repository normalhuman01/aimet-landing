import { ServicesView } from '@/views/Service'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

const ServicePage = () => {
  const { t } = useTranslation("service")
  return (
    <>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>
      <ServicesView />
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "service"])),
    },
  };
}

export default ServicePage