import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import bytebankLogo from '@/assets/logoBytebankWhite.png';

export default function Footer() {
  const footerData = [
    {
      title: 'Serviços',
      items: [
        { label: 'Conta corrente' },
        { label: 'Conta PJ' },
        { label: 'Cartão de crédito' },
      ],
    },
    {
      title: 'Contato',
      items: [
        { label: '0800 004 250 08' },
        { label: 'meajuda@bytebank.com.br' },
        { label: 'ouvidoria@bytebank.com.br' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000',
        color: '#ffffff',
        padding: '40px 80px',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '40px',
      }}
    >
      {footerData.map((section) => (
        <Box key={section.title} sx={{ minWidth: 200, mb: 3 }}>
          <Typography sx={{ fontWeight: 600, mb: 1 }}>
            {section.title}
          </Typography>
          {section.items.map((item) => (
            <>
              <Typography
                sx={{
                  display: 'block',
                  textDecoration: 'none',

                  mb: 0.5,
                  transition: 'color 0.3s',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#236B7A',
                    textDecoration: 'underline',
                  },
                }}
              >
                {item.label}
              </Typography>
            </>
          ))}
        </Box>
      ))}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 1,
        }}
      >
        <Typography fontWeight={600}>
          Desenvolvido por Tech Challenge FIAP
        </Typography>
        <Image src={bytebankLogo} alt="Bytebank Logo" width={120} height={30} />
        <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
          <InstagramIcon sx={{ fontSize: 28 }} />
          <WhatsAppIcon sx={{ fontSize: 28 }} />
          <YouTubeIcon sx={{ fontSize: 28 }} />
        </Box>
      </Box>
    </Box>
  );
}
