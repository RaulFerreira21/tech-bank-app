'use client';

import { Box, Fab as FabButton, Typography } from '@mui/material';
import { ComponentProps, type ReactNode } from 'react';

type ButtonServicesProps = ComponentProps<typeof FabButton> & {
  label?: string;
  icon: ReactNode;
};

export default function ButtonServices({
  label,
  icon,
  ...rest
}: ButtonServicesProps) {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <FabButton {...rest}>{icon}</FabButton>
      <Typography sx={{ mt: 0.5 }}>{label}</Typography>
    </Box>
  );
}
