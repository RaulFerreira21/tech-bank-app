import { Box, Fab as FabButton, Typography } from '@mui/material'
import { ComponentProps, type ReactNode } from 'react'

type ButtonServicesProps = ComponentProps<typeof FabButton> & {
  label: string
  color: string
  icon: ReactNode
}

export function ButtonServices({
  label,
  color,
  icon,
  ...rest
}: ButtonServicesProps) {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <FabButton sx={{ bgcolor: `${color}` }} {...rest}>
        {icon}
      </FabButton>
      <Typography>{label}</Typography>
    </Box>
  )
}
