import { DigitalAgencyView } from '@/views/DigitalAgency'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DigitalAgencyPage = () => {
  return (
    <DigitalAgencyView />
  )
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default DigitalAgencyPage