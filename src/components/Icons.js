import React from 'react';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import config from '../config';

const ColorIconButton = styled(IconButton)(({ theme }) => ({
  color: config.colors.icon[200],
}));

function Icons() {

  return (
    <Stack direction="row" spacing={1}>
      {
        config.icons.map((link, i) => {

          // Theres a better way to do it, but nvm
          if (link.hidden) { return false; }

          return (
            <ColorIconButton
              key={i}
              size="small"
              aria-label={link.tooltip}
              rel="noopener noreferrer"
              target="_blank"
              href={link.route}
            >
              {link.icon}
            </ColorIconButton>
          )
        })
      }
    </Stack>
  )
}

export default Icons