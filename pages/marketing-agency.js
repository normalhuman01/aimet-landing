import { MarketingAgencyView } from '@/views/MarketingAgency'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const MarketingAgencyPage = () => {
  return (
    <MarketingAgencyView />
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default MarketingAgencyPage