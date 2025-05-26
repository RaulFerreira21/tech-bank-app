import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import contentImage from '@/assets/content_banner.png';
import giftImg from '@/assets/gift.png';
import moneyImg from '@/assets/money.png';
import starImg from '@/assets/star.png';
import deviceImg from '@/assets/device.png';

import { useTheme } from '@mui/material/styles';

export default function Content() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contentData = [
    {
      title: 'Conta e cartão gratuitos',
      description:
        'Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.',
      icon: giftImg,
    },
    {
      title: 'Saques sem custo',
      description:
        'Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.',
      icon: moneyImg,
    },
    {
      title: 'Programa de pontos',
      description:
        'Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!',
      icon: starImg,
    },
    {
      title: 'Seguro Dispositivos',
      description:
        'Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.',
      icon: deviceImg,
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6 },
        gap: { xs: 4, md: 6 },
        mt: '90px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 6 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box sx={{ maxWidth: '400px' }}>
          <Typography
            variant="h5"
            sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
          >
            Experimente mais liberdade no controle da sua vida financeira. Crie
            sua conta com a gente!
          </Typography>
        </Box>
        <Box>
          <Image
            src={contentImage}
            alt="Imagem de conteúdo"
            width={isMobile ? 280 : 400}
            height={isMobile ? 280 : 400}
          />
        </Box>
      </Box>

    
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, textAlign: 'center', color: '#fff' }}
      >
        Vantagens do nosso banco:
      </Typography>

      
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: { xs: 3, md: 5 },
          maxWidth: '1000px',
        }}
      >
        {contentData.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '220px',
              textAlign: 'center',
            }}
          >
            <Image src={item.icon} alt={item.title} width={50} height={50} />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: '#236B7A',
                mt: 1,
              }}
            >
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#f5f7fa' }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
