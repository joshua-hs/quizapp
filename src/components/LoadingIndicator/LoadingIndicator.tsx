import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Stack } from '@mui/material';

interface LoadingIndicatorProps {
  text?: string;
}

const defaultProps = {
  text: '',
};

export function LoadingIndicator({ text }: LoadingIndicatorProps) {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <Stack direction="column" alignItems="center" spacing={3}>
          <CircularProgress color="inherit" />
          <Typography align="center" variant="h5">
            {text}
          </Typography>
        </Stack>
      </Backdrop>
    </div>
  );
}

LoadingIndicator.defaultProps = defaultProps;
