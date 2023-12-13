import { BlogView } from "@/views/Blog";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const BlogPage = () => {
  return <BlogView />;
};


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default BlogPage;
