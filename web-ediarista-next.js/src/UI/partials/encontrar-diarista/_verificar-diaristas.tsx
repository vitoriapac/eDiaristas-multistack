import React, { PropsWithChildren } from "react";
import { Button, Container, Typography } from "@mui/material";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import TextFieldMask from "UI/components/inputs/TextFieldMask/TextFieldMask";
import {
  FormElementsContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "./_verificar-diaristas.styled";
import UserInformation from "UI/components/data-display/UserInformation/UserInformation";

const VerificarDiaristas: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Veja todos os profissionais da sua localidade."
      />
      <Container sx={{ mb: "110px" }}>
        <FormElementsContainer>
          <TextFieldMask mask="99.999-999" label="Digite o seu CEP" fullWidth />

          <Typography color="error">CEP não encontrado!</Typography>
          <Button variant="contained" color="secondary" sx={{ width: "220px" }}>
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name="Madison Panov"
              picture="https://xsgames.co/randomusers/assets/avatars/female/22.jpg"
              rating={4}
              description="Especialista em Salas"
            />
            <UserInformation
              name="Emelda Stenroos"
              picture="https://xsgames.co/randomusers/assets/avatars/female/57.jpg"
              rating={3}
              description="Faz de tudo"
            />
            <UserInformation
              name="Mimi Lavare"
              picture="https://xsgames.co/randomusers/assets/avatars/female/18.jpg"
              rating={4}
              description="Especialista em Escritórios"
            />
          </ProfissionaisContainer>

          <Container sx={{ textAlign: "center" }}>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ mt: "5px" }}
            >
              ... mais 50 diaristas disponíveis ao seu endereço.
            </Typography>

            <Button variant="contained" color="secondary" sx={{ mt: "5px" }}>
              Contratar um(a) profissional
            </Button>
          </Container>
        </ProfissionaisPaper>
      </Container>
    </>
  );
};

export default VerificarDiaristas;
