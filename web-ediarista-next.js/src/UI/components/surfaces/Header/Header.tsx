import { useState } from "react";
import {
  Container,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import {
  HeaderAppBar,
  HeaderLogo,
  ButtonContainer,
  HeaderDrawer,
} from "./Header.styled";
import Link from "UI/components/navigation/Link/Link";
import RoundedButton from "UI/components/inputs/RoundedButton/RoundedButton";
import useIsMobile from "data/hooks/useIsMobile";

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
};

const HeaderDesktop: React.FC = () => {
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <Link href="/">
          <HeaderLogo src="./img/logos/logo.svg" alt="Logo e-diaristas" />
        </Link>

        <div>&nbsp;</div>
        <div>&nbsp;</div>

        <ButtonContainer>
          <Link
            Component={RoundedButton}
            mui={{ variant: "contained", color: "primary" }}
            href="/cadastro/diarista"
          >
            Seja um(a) diarista
          </Link>
          <Link href="/login">Login</Link>
        </ButtonContainer>
      </Toolbar>
    </HeaderAppBar>
  );
};

const HeaderMobile: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <HeaderAppBar>
      <Toolbar component={Container}>
        <IconButton
          edge={"start"}
          color={"inherit"}
          onClick={() => setDrawerOpen(true)}
        >
          <i className="twf-bars" />
        </IconButton>
        <Link href="/">
          <HeaderLogo src="./img/logos/logo.svg" alt="Logo e-diaristas" />
        </Link>
        <HeaderDrawer
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
          onClick={() => setDrawerOpen(false)}
        >
          <MenuList>
            <Link href="/login" Component={MenuItem}>
              Login
            </Link>
            <Divider />
            <Link href="/cadastro/diarista" Component={MenuItem}>
              Seja um(a) diarista
            </Link>
          </MenuList>
        </HeaderDrawer>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
