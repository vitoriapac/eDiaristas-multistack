import React, { PropsWithChildren } from "react";
import { Typography } from "@mui/material";
import { passwordStrength } from "check-password-strength";
import {
  PasswordStrengthBar,
  PasswordStrengthLabel,
} from "./PasswordStrength.styled";

export interface PasswordStrengthProps {
  password: string;
}

const PasswordStrength: React.FC<PropsWithChildren<PasswordStrengthProps>> = ({
  password,
}) => {
  const strength = password ? passwordStrength(password).id : 0,
    strengthValue = ((strength + 1) / 4) * 100;

  return (
    <div style={{ gridArea: "password-strength" }}>
      <Typography variant="body2" component={"span"} color={"textSecondary"}>
        Nível da senha:&nbsp;
        <PasswordStrengthLabel value={strengthValue}>
          {strength === 0 && "FRACA"}
          {strength === 1 && "MÉDIA"}
          {strength === 2 && "BOA"}
          {strength === 3 && "FORTE"}
        </PasswordStrengthLabel>
      </Typography>
      <PasswordStrengthBar variant="determinate" value={strengthValue} />
    </div>
  );
};

export default PasswordStrength;
