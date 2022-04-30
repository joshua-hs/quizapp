import { createTheme } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const theme = createTheme({
  palette: {
    background: {
      default: '#ededed',
    },
  },
  gradientColours: {
    blue: 'linear-gradient(45deg, #0000FF 30%, #5858FA 90%)',
    orange: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

// "Module Augmentation" - necessary for TypeScript
declare module '@mui/material/styles' {
  interface ThemeOptions {
    gradientColours?: {
      blue?: string;
      orange?: string;
    };
  }
}

export default theme;
