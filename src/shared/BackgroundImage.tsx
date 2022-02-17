import { styled } from '@mui/styles';

const BackgroundImage = styled('div')({
  background:
    'linear-gradient(35deg, rgba(0,125,195,1) 0%, rgba(152,1,189,0.8435749299719888) 100%)',
  minHeight: '100vh',
  minWidth: '100vw',

  width: '100%',
  height: 'auto',
  overflow: 'hidden',
  position: 'fixed',
});

export default BackgroundImage;
