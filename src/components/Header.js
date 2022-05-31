import React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import Icons from './Icons';

import config from '../config';

function Header() {
  return (
    <Stack direction="row" spacing={2} sx={{ py: 3 }}>
      <Avatar
        alt={config.title}
        src={config.avatar}
        sx={{ width: 74, height: 74 }} />

      <Box sx={{ width: '100%' }}>

        <Typography
          variant="overline"
          display="block"
          gutterBottom
        >
          {config.title}
        </Typography>

        <Icons />

      </Box>
    </Stack>
  )
}
export default Header