import { Typography, TextField } from "@mui/material";

interface InputComTituloProps {
  title: string;
}

export default function InputComTitulo({
  title,
  ...props
}: InputComTituloProps) {
  return (
    <>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: "bold" }}>
        {title}
      </Typography>
      <TextField
        fullWidth
        variant="standard"
        placeholder="R$"
        slotProps={{
          input: {
            disableUnderline: false,
          },
        }}
        sx={{ mb: 4 }}
        {...props}
      />
    </>
  );
}
