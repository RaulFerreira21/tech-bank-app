import { options } from "@/utils/optionsServices"
import { Box, Typography } from "@mui/material"

export default function CardServicos() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", px: 4, py: 1 }}>
      {options.map((item) => (
        <Typography
          key={item}
          variant="body2"
          sx={{
            textDecoration: "underline",
            cursor: "pointer",
            "&:hover": { opacity: 0.8 },
          }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  )
}
