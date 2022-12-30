import type { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Home",
    },
  };
};

const Index: NextPage = (props) => {
  return <div></div>;
};

export default Index;
