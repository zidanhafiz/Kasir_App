import { Box, LinearProgress, Typography } from '@mui/material';

type Props = {
  message?: string;
};
function LoadingBar({ message = 'Loading data...' }: Props) {
  return (
    <Box sx={{ width: '400px', mx: 'auto' }}>
      <Typography
        textAlign='center'
        mb={2}
      >
        {message}
      </Typography>
      <LinearProgress />
    </Box>
  );
}

export default LoadingBar;
