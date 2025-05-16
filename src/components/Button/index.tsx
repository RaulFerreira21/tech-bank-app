import { Button as MuiButton } from '@mui/material'

type ButtonProps = {
  text: string
  color: 'primary' | 'secondary' | 'info' | 'inherit'
}

export default function Button({ text, color, ...props }: ButtonProps) {
  return (
    <MuiButton
      color={color}
      variant="contained"
      sx={{
        textTransform: 'none',
        borderRadius: 0,
        width: '6rem',
        backgroundColor: color === 'inherit' ? 'inherit' : color,
        color:
          color === 'inherit'
            ? 'white'
            : color === 'secondary'
            ? 'black'
            : 'white',
        border:
          color === 'inherit' ? '1px solid white' : '1px solid transparent',
      }}
      {...props}
    >
      {text}
    </MuiButton>
  )
}
