import { Box, List, Typography } from "@mui/material";
import {
  FooterContainer,
  FooterTitle,
  FooterGrid,
  FooterListItem,
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

        <FooterTitle>Baixe nosso aplicativo</FooterTitle>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
