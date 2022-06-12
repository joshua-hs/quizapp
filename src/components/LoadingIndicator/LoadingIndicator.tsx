import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography, Stack } from '@mui/material';

export default function SimpleBackdrop() {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <Stack direction="column" alignItems="center" spacing={3}>
          <Typography align="center" variant="h5">
            Spinning up back-end (this might take a few seconds)...
          </Typography>
          <CircularProgress color="inherit" />
        </Stack>
      </Backdrop>
    </div>
  );
}
