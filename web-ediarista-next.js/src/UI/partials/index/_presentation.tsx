import { useEffect, useState } from "react";
import {
  BottomButton,
  ContainerStyle,
  SectionButton,
  SectionContainer,
  SectionPictureContainer,
  SectionSubtitle,
  SectionTitle,
} from "./_presentation.styled";

const Presentation = () => {
  const [cleanerPicture, setCleanerPicture] = useState("");

  useEffect(() => {
    const newCleanerPicture =
      Math.random() < 0.5
        ? "/img/home/janitor.png"
        : "/img/home/housekeeper.png";
    setCleanerPicture(newCleanerPicture);
  }, []);

  return (
    <SectionContainer>
      <ContainerStyle>
        <SectionTitle>
          Encontre agora mesmo um(a) <em>diarista</em>
          <i className="twf-search" />
        </SectionTitle>

        <SectionSubtitle>
          São mais de 5.000 profissionais esperando por você!
        </SectionSubtitle>

        <SectionButton
          href="/encontrar-diarista"
          mui={{ variant: "contained" }}
        >
          Encontrar um(a) diarista
        </SectionButton>

        <SectionPictureContainer>
          <img src={cleanerPicture} alt="" />
        </SectionPictureContainer>
      </ContainerStyle>
      <BottomButton>
        <i className="twf-caret-down" />
      </BottomButton>
    </SectionContainer>
  );
};

export default Presentation;
