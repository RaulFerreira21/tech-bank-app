'use client';

import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        padding: 2,
        bgcolor: '#fff',
      }}
    >
      <Typography
        variant="h6"
        color="textSecondary"
        sx={{
          textAlign: 'center',
        }}
      >
        {title}
      </Typography>

      <Link href="/dashboard">
        <IconButton
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
      </Link>
    </Box>
  );
}
