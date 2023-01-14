import React from "react";
import { GetStaticProps } from "next";
import VerificarDiaristas from "@partials/encontrar-diarista/_verificar-diaristas";

// import { Component } from '@styles/pages/encontrar-diarista.styled';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "EncontrarDiarista",
    },
  };
};

const EncontrarDiarista: React.FC = () => {
  return (
    <div>
      <VerificarDiaristas />
    </div>
  );
};

export default EncontrarDiarista;
