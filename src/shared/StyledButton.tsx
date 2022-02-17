/* eslint-disable no-nested-ternary */
import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/styles';

interface StyledButtonProps {
  // eslint-disable-next-line react/require-default-props
  colour?: string;
}

const StyledButton = styled(
  ({
    colour,
    ...other
  }: StyledButtonProps & Omit<ButtonProps, keyof StyledButtonProps>) => (
    <Button {...other} />
  )
)({
  background: (props: StyledButtonProps) =>
    props.colour ?? 'linear-gradient(45deg, #088A08 30%, #04B431 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: '40px',
  padding: '0 30px',
  margin: 8,
});

export default StyledButton;
