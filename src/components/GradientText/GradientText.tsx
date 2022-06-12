import React from 'react';
import { keyframes } from '@mui/material/styles';
import { Typography } from '@mui/material';

interface GradientTextProps {
  children: any;
}

export function GradientText({ ...props }: GradientTextProps) {
  const animationEffect = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  
  50% {
    filter: hue-rotate(-90deg);
  }
  
  100% {
    filter: hue-rotate(0deg);
  }`;
  return (
    <Typography
      borderRadius="8px"
      component="span"
      variant="h3"
      sx={{
        animation: `${animationEffect} 5s linear infinite alternate`,
        background:
          'linear-gradient(to right bottom, rgb(194, 93, 255), rgb(255, 214, 93));',
        padding: '0px 20px calc(4px)',
      }}
    >
      {props.children}
    </Typography>
  );
}
