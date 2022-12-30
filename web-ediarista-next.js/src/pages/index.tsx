import type { GetStaticProps, NextPage } from "next";
import Presentation from "@partials/index/_presentation";
import Advantages from "@partials/index/_advantages";

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
      <Advantages />
    </div>
  );
};

export default Index;
