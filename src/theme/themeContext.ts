import { createTheme } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const backgroundTheme = createTheme({
  palette: {
    primary: {
      main: '#FE6B8B',
    },
  },
});

// "Module Augmentation" - necessary for TypeScript
declare module '@mui/material/styles' {
  interface ThemeOptions {
    background?: {
      orangeGradient?: string;
    };
  }
}

export default backgroundTheme;
