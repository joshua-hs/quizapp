/* eslint-disable no-nested-ternary */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StyledButton from '../shared/StyledButton';

interface HomeChoiceCardProps {
  topic: string;
  imageURL: string;
  buttonColour: string;
}

const HomeChoiceCard = ({
  topic,
  imageURL,
  buttonColour,
}: HomeChoiceCardProps) => {
  return (
    <Card
      sx={{
        width: '300px',
        position: 'relative',
        height: '450px',
        borderRadius: '20px',
      }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="div">
          {topic}
        </Typography>
      </CardContent>
      <CardMedia component="img" image={imageURL} />
      <CardActions sx={{ justifyContent: 'center' }}>
        <StyledButton
          colour={buttonColour}
          sx={{ position: 'absolute', bottom: '20px' }}
        >
          Begin Quiz
        </StyledButton>
      </CardActions>
    </Card>
  );
};

export default HomeChoiceCard;
