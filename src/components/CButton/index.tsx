'use client';

import { Button } from '@mui/material';
import type { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof Button> & {
  text: string;
  color?: 'primary' | 'secondary' | 'info' | 'inherit';
};

export default function CButton({ text, color, ...rest }: ButtonProps) {
  return (
    <Button
      color={color}
      variant="contained"
      sx={{
        textTransform: 'none',
        borderRadius: 0,
        width: 'auto',
        backgroundColor: color === 'inherit' ? 'inherit' : color,
        color:
          color === 'inherit'
            ? 'black'
            : color === 'secondary'
            ? 'black'
            : 'white',
        border:
          color === 'inherit' ? '1px solid black' : '1px solid transparent',
      }}
      {...rest}
    >
      {text}
    </Button>
  );
}
