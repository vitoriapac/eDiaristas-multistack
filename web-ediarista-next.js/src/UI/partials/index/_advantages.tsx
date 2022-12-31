import { Container, ListItem, ListItemAvatar } from "@mui/material";
import {
  AvatarStyle,
  GradientBackground,
  ListItemTextStyled,
  ListStyle,
  SectionTitle,
} from "./_advantages.styled";

const Advantages = () => {
  return (
    <GradientBackground>
      <Container>
        <SectionTitle>Por que usar o E-diaristas?</SectionTitle>

        <ListStyle>
          <ListItem>
            <ListItemAvatar>
              <AvatarStyle>
                <i className="twf-certificate" />
              </AvatarStyle>
            </ListItemAvatar>

            <ListItemTextStyled
              primary={"Diversidade"}
              secondary={"São mais de 5.000 profissionais esperando por você!"}
            />
          </ListItem>
        </ListStyle>
      </Container>
    </GradientBackground>
  );
};

export default Advantages;
