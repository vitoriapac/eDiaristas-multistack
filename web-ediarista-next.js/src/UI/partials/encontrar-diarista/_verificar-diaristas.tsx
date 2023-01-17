import React, { PropsWithChildren } from "react";
import { Button, Container, Typography, CircularProgress } from "@mui/material";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import TextFieldMask from "UI/components/inputs/TextFieldMask/TextFieldMask";
import {
  FormElementsContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "./_verificar-diaristas.styled";
import UserInformation from "UI/components/data-display/UserInformation/UserInformation";
import useVerificarProfissionais from "data/hooks/pages/useVerificarProfissionais.pages";

const VerificarDiaristas: React.FC<PropsWithChildren> = () => {
  const {
    cep,
    setCep,
    cepValido,
    error,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
    buscarProfissionais,
  } = useVerificarProfissionais();

  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Veja todos os profissionais da sua localidade."
      />
      <Container sx={{ mb: "110px" }}>
        <FormElementsContainer>
          <TextFieldMask
            mask="99.999-999"
            label="Digite o seu CEP"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            fullWidth
          />

          {error && <Typography color="error">CEP não encontrado!</Typography>}

          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : "Buscar"}
          </Button>
        </FormElementsContainer>

        {buscaFeita &&
          (diaristas.length > 0 ? (
            <ProfissionaisPaper>
              <ProfissionaisContainer>
                {diaristas.map((diarista, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={diarista.nome_completo}
                      picture={diarista.foto_usuario ?? ""}
                      rating={diarista.reputacao ?? 0}
                      description={diarista.cidade}
                    />
                  );
                })}

                {/* <UserInformation
                    name="Emelda Stenroos"
                    picture="https://xsgames.co/randomusers/assets/avatars/female/57.jpg"
                    rating={3}
                    description="Faz de tudo"
                  /> */}
              </ProfissionaisContainer>

              <Container sx={{ textAlign: "center" }}>
                {diaristasRestantes > 0 && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mt: "5px" }}
                  >
                    ...e mais {diaristasRestantes}{" "}
                    {diaristasRestantes > 1
                      ? " profissionais atendem"
                      : "profissional atende"}
                    .
                  </Typography>
                )}

                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mt: "5px" }}
                >
                  Contratar um(a) profissional
                </Button>
              </Container>
            </ProfissionaisPaper>
          ) : (
            <Typography align="center" color="textPrimary">
              Ainda não temos nenhum(a) diarista disponível na sua região.
            </Typography>
          ))}
      </Container>
    </>
  );
};

export default VerificarDiaristas;
