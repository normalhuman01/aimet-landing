import { PhotographyAgencyView } from '@/views/PhotographyAgency'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const PhotographyAgencyPage = () => {
  return (
    <PhotographyAgencyView />
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default PhotographyAgencyPage