/* eslint-disable no-nested-ternary */
import Button from '@mui/material/Button';
import styled from 'styled-components';

interface StyledButtonProps {
  // eslint-disable-next-line react/require-default-props
  backgroundcolour?: string;
  size?: 'small' | 'medium';
}

const StyledButton = styled(Button)<StyledButtonProps>`
  background: ${(props) => props.backgroundcolour ?? 'black'};
  color: white;
  border: 0;
  border-radius: 3;
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  height: ${(props) =>
    props.size === 'medium'
      ? '40px'
      : props.size === 'small'
      ? '40px'
      : '40px'};
  width: ${(props) =>
    props.size === 'medium'
      ? '150px'
      : props.size === 'small'
      ? '110px'
      : '150px'};
  padding: 0 30px;
  margin: 8;
  '&:hover': {
    background: '#7a00f2',
  },
`;

// const StyledButton = styled(
//   ({
//     colour,
//     ...other
//   }: StyledButtonProps & Omit<ButtonProps, keyof StyledButtonProps>) => (
//     <Button {...other} />
//   )
// )({
//   background: (props: StyledButtonProps) =>
//     props.colour ?? 'linear-gradient(45deg, #088A08 30%, #04B431 90%)',
// border: 0,
// borderRadius: 3,
// boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
// '&.muiButton-text': { color: 'white' },
// height: '40px',
// padding: '0 30px',
// margin: 8,
// });

export default StyledButton;
