import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

const QuestionHero = () => {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid black',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span" sx={{color: 'black'}}>
          Залишились запитання? <br/>Потрібна допомога?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Завжди готові допомогти. Залишаємося на звʼязку!
      </Typography>
    </Container>
  );
}

export default QuestionHero;