import { Box, Typography } from "@mui/material"

import type { ReactNode } from "react"

interface CardComponentsProps {
  title: string
  children: ReactNode
}

export default function CardComponents({
  title,
  children,
}: CardComponentsProps) {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#121212",
        p: 2,
        borderBottom: "1px solid #454545",
        color: "#ffffff",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      {children}
    </Box>
  )
}
