import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface StyledButtonProps extends ButtonProps {
  primarycolor: string;
}

const StyledButton = styled(Button)(
  ({ primarycolor: primaryColor }: StyledButtonProps) => ({
    background: primaryColor,
    borderRadius: '6px',
    fontWeight: 'medium',
    letterSpacing: '1px',
    color: 'white',
    width: '9.375rem',
    height: '2.5rem',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.5)',
    transition: 'all 0.3s ease 0s',
    '&:hover': {
      background: primaryColor,
      filter: 'brightness(85%);',
    },
  })
);

// export default function NewButton({ color }: NewButtonProps) {
//   return <Button sx={{ backgroundColor: color }} />;
// }

export default StyledButton;
