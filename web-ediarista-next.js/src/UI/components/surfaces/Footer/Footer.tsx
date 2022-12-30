import { Box, List, Typography } from "@mui/material";
import {
  AppList,
  FooterContainer,
  FooterTitle,
  FooterGrid,
  FooterListItem,
  SocialContainer,
  FooterSocialList,
  SocialButton,
} from "./Footer.styled";
import Link from "UI/components/navigation/Link/Link";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <div>
          <FooterTitle>Menu</FooterTitle>
          <List>
            <FooterListItem>
              <Link
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >
                Encontrar um(a) diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link
                href="/encontrar-diarista"
                mui={{ color: "inherit", variant: "body2" }}
              >
                Seja um(a) diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Por que usar o E-diarista
              </Link>
            </FooterListItem>
            <FooterListItem>
              <Link href="/" mui={{ color: "inherit", variant: "body2" }}>
                Principais dúvidas
              </Link>
            </FooterListItem>
          </List>
        </div>

        <Box sx={{ maxWidth: "400px", mb: 2 }}>
          <FooterTitle>Quem somos?</FooterTitle>
          <Typography variant="body2" sx={{ mt: 2 }}>
            E-Diaristas te ajuda a encontrar um profissional perfeito para
            realizar a limpeza da sua casa. Garantimos o(a) melhor profissional
            com total segurança e praticidade! São milhares de clientes
            satisfeitos por todo o país.
          </Typography>
        </Box>

        <SocialContainer>
          <div>
            <FooterTitle>Baixe nosso aplicativo</FooterTitle>
            <AppList>
              <li>
                <a
                  href="https://www.apple.com/br/app-store/"
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  <img src="/img/logos/app-store.png" alt="App Store" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps"
                  target={"_blank"}
                  rel="noreferrer noopener"
                >
                  <img src="/img/logos/google-play.png" alt="Google Play" />
                </a>
              </li>
            </AppList>
          </div>
          <div>
            <FooterTitle>Redes Sociais</FooterTitle>

            <FooterSocialList>
              <FooterListItem>
                <SocialButton href="/">
                  <i className="twf-facebook-f" />
                </SocialButton>
              </FooterListItem>

              <FooterListItem>
                <SocialButton href="/">
                  <i className="twf-instagram" />
                </SocialButton>
              </FooterListItem>

              <FooterListItem>
                <SocialButton href="/">
                  <i className="twf-youtube" />
                </SocialButton>
              </FooterListItem>
            </FooterSocialList>
          </div>
        </SocialContainer>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
