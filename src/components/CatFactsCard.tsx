import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import PetsIcon from '@mui/icons-material/Pets';
import React from 'react';

interface CatFactsCardProps {
  catFact: string;
  attemptQuiz: any;
  fetchCatFact: any;
}

export default function CatFactsCard({
  catFact,
  attemptQuiz,
  fetchCatFact,
}: CatFactsCardProps) {
  function handleClick() {
    attemptQuiz();
  }
  return (
    <Card
      sx={{
        width: '18.75rem',
        position: 'relative',
        height: '28.125rem',
        borderRadius: '20px',
      }}
    >
      <CardContent sx={{ textAlign: 'center', paddingTop: '100px' }}>
        <Typography variant="h5" component="div">
          {catFact}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '0px',
            textAlign: 'center',
          }}
          container
          rowSpacing={3}
        >
          <Grid item xs={6}>
            <Button
              variant="contained"
              size="large"
              sx={{ width: '110px' }}
              endIcon={<DoneIcon />}
              onClick={() => handleClick()}
            >
              Show results
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="error"
              size="large"
              sx={{ width: '110px' }}
              endIcon={<PetsIcon />}
              onClick={() => fetchCatFact()}
            >
              I wish to see another cat fact
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}
