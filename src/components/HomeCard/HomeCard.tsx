import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { StyledButton } from '../StyledButton';

export interface HomeCardProps {
  id?: string;
  title: string;
  imageURL: string;
  buttonColour: string;
}

export function HomeCard({ title, imageURL, buttonColour }: HomeCardProps) {
  const hexRegEx = /#(?:[0-9a-fA-F]{3}){1,2}/g;
  const extractedHexCodes = buttonColour.match(hexRegEx)!;

  return (
    <Card
      className="homeCard"
      sx={{
        width: '18.75rem',
        position: 'relative',
        height: '28.125rem',
        borderRadius: '20px',
        textAlign: 'center',
        transition: 'all 0.3s ease 0s',
        '&:hover': {
          transform: 'translateY(-7px)',
          boxShadow: `0px 8px 25px ${extractedHexCodes[1]}`,
        },
        '&.hover': {
          transform: 'translateY(-7px)',
          boxShadow: `0px 8px 25px ${extractedHexCodes[1]}`,
        },
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardMedia component="img" image={imageURL} />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Link
          to={`/quiz/${title}`}
          state={{ color: extractedHexCodes[1] }}
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <StyledButton
            primarycolor={buttonColour}
            sx={{ position: 'absolute', bottom: '30px' }}
          >
            Begin Quiz
          </StyledButton>
        </Link>
      </CardActions>
    </Card>
  );
}
