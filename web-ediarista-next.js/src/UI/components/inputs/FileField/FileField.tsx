import React, { ChangeEvent, PropsWithChildren, useState } from "react";
import { TextFieldProps } from "@mui/material";
import TextField from "../TextField/TextField";
import { FileContainer, UploadIcon } from "./FileField.styled";

export interface FileFieldProps extends Omit<TextFieldProps, "onChange"> {
  onChange: (files: FileList) => void;
}

const FileField: React.FC<PropsWithChildren<FileFieldProps>> = ({
  onChange,
  ...props
}) => {
  const [filePath, setFilePath] = useState("");

  function handleFileChange(event: ChangeEvent) {
    const target = event.target as HTMLInputElement,
      files = target.files;

    if (files !== null && files.length) {
      setFilePath(files[0]?.name ?? "");
      onChange(files);
    }
  }

  return (
    <FileContainer>
      <TextField
        label={"Selecione um arquivo:"}
        value={filePath}
        InputProps={{ endAdornment: <UploadIcon className="twf-upload" /> }}
        {...props}
        fullWidth
      />
      <TextField
        type={"files"}
        {...props}
        fullWidth
        onChange={handleFileChange}
      />
    </FileContainer>
  );
};

export default FileField;
