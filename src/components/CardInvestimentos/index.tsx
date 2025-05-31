import { Box, Typography } from "@mui/material"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"

export default function CardInvestimentos() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        px: 4,
        py: 1,
        alignItems: "flex-start",
      }}
    >
      <Box>
        <Typography>R$ 35.845,27</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ArrowDropUpIcon color="success" />
          <Typography variant="body2">20% em 12 meses</Typography>
        </Box>
      </Box>
    </Box>
  )
}
