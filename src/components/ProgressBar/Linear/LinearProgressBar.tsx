import * as React from 'react';
import LinearProgress, {
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function LinearProgressBar(
  props: LinearProgressProps & { value: number }
) {
  const { value } = props;
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography fontWeight="bold" variant="h5">{`${Math.round(
          value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
