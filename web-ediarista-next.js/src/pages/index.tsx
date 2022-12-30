import type { GetStaticProps, NextPage } from "next";
import Presentation from "@partials/index/_presentation";

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Home",
    },
  };
};

const Index: NextPage = () => {
  return (
    <div>
      <Presentation />
    </div>
  );
};

export default Index;
