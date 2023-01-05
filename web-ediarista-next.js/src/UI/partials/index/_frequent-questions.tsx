import React, { useState } from "react";
import {
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography,
} from "@mui/material";
import {
  AccordionStyled,
  SectionContainer,
  SectionSubtitle,
  SectionTitle,
  Wave,
} from "./_frequent-questions.styled";

const questionsList = [
  {
    question: "Dúvida 1",
    answer:
      "Laborum adipisicing consectetur Lorem eiusmod ipsum eiusmod mollit elit proident do id. Minim aliqua cillum in consequat labore fugiat adipisicing aliquip ex velit sint nostrud. In irure enim tempor eiusmod esse sunt laboris nulla anim eiusmod id.",
  },
  {
    question: "Dúvida 2",
    answer:
      "Et id eiusmod dolor ut consequat in cupidatat aliqua ex sunt in. Nisi irure ad nostrud minim est ad tempor. Dolor est in nisi irure nulla. Laborum adipisicing consectetur Lorem eiusmod ipsum eiusmod mollit elit proident do id. Minim aliqua cillum in consequat labore fugiat adipisicing aliquip ex velit sint nostrud. ",
  },
  {
    question: "Dúvida 3",
    answer:
      "Laborum adipisicing consectetur Lorem eiusmod ipsum eiusmod mollit elit proident do id. Minim aliqua cillum in consequat labore fugiat adipisicing aliquip ex velit sint nostrud. In irure enim tempor eiusmod esse sunt laboris nulla anim eiusmod id.",
  },
  {
    question: "Dúvida 4",
    answer:
      "Nisi consectetur reprehenderit exercitation mollit eu quis amet qui adipisicing veniam duis velit fugiat excepteur. Et id eiusmod dolor ut consequat in cupidatat aliqua ex sunt in. Nisi irure ad nostrud minim est ad tempor.",
  },
];

const FrequentQuestions = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);

  function isOpen(accordionIndex: number): boolean {
    return activeAccordion === accordionIndex;
  }

  function changeOpenAccordion(accordionIndex: number): void {
    if (isOpen(accordionIndex)) {
      setActiveAccordion(0);
    } else {
      setActiveAccordion(accordionIndex);
    }
  }

  function getIcon(accordionIndex: number): string {
    return isOpen(accordionIndex) ? "twf-minus" : "twf-plus";
  }

  return (
    <SectionContainer>
      <Wave src="/img/home/waves.svg" />
      <Container>
        <SectionTitle>Ainda está com dúvidas?</SectionTitle>
        <SectionSubtitle>Veja abaixo as perguntas frequentes.</SectionSubtitle>

        {questionsList.map((item, index) => {
          return (
            <AccordionStyled
              key={index}
              expanded={isOpen(index + 1)}
              onChange={() => changeOpenAccordion(index + 1)}
            >
              <AccordionSummary
                expandIcon={<i className={getIcon(index + 1)} />}
              >
                <Typography color={"primary"}>{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </AccordionStyled>
          );
        })}
      </Container>
    </SectionContainer>
  );
};

export default FrequentQuestions;
