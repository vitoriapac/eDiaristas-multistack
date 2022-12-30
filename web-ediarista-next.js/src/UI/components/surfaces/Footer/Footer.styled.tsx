import { Container, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PropsWithChildren } from "react";

export const FooterContainer = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: ${({ theme }) => theme.spacing(4, 0)};
`;

export const FooterGrid = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export const FooterTitle = styled((props: PropsWithChildren) => (
  <Typography variant="body2" component="h2" {...props} />
))`
  font-weight: bold;
`;

export const FooterListItem = styled((props: PropsWithChildren) => (
  <ListItem disableGutters {...props} />
))``;
