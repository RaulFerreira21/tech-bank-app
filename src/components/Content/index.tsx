import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import contentImage from '@/assets/content_banner.png';
import giftImg from '@/assets/gift.png';
import moneyImg from '@/assets/money.png';
import starImg from '@/assets/star.png';
import deviceImg from '@/assets/device.png';

export default function Content() {
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
        padding: '40px',
        gap: '40px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          gap: '50px',
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ maxWidth: '400px' }}>
          <Typography
            variant="h5"
            sx={{ color: 'white', fontWeight: 'bold', marginBottom: '20px' }}
          >
            Experimente mais liberdade no controle da sua vida financeira. Crie
            sua conta com a gente!
          </Typography>
        </Box>
        <Box>
          <Image src={contentImage} alt="Imagem de conteúdo" width={400} />
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, color: '#ffffff', textAlign: 'center' }}
      >
        Vantagens do nosso banco:
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
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
              maxWidth: '200px',
              textAlign: 'center',
            }}
          >
            <Image src={item.icon} alt={item.title} width={50} height={50} />
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, color: '#236B7A', marginTop: '10px' }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: '10px', color: '#e6e4e1' }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
