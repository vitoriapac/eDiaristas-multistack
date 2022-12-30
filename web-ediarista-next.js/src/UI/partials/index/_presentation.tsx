import {
  ContainerStyle,
  SectionContainer,
  SectionTitle,
} from "./_presentation.styled";

const Presentation = () => {
  return (
    <SectionContainer>
      <ContainerStyle>
        <SectionTitle>
          Encontre agora mesmo um(a) <em>diarista</em>
          <i className="twf-search" />
        </SectionTitle>
      </ContainerStyle>
    </SectionContainer>
  );
};

export default Presentation;
