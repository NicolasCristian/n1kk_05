import * as React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import config from '../config';

// const ColorButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.getContrastText(config.colors.button[500]),
//   backgroundColor: config.colors.button[500],
//   '&:hover': {
//     backgroundColor: config.colors.button[700],
//   },
// }));

export default function List() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {
          config.items.map((item, i) => {

            // Theres a better way to do it, but nvm
            if (item.hidden) { return false; }

            if (item.type === "link") {
              return (
                <Tooltip key={i} title={item.content}>
                  <Button
                    size="large"
                    startIcon={item.icon}
                    variant="contained"
                    rel="noopener noreferrer"
                    target="_blank"
                    href={item.route}
                  >
                    {item.title}
                  </Button>
                </Tooltip>
              )
            }

            if (item.type === "accordion") {
              return (
                <Accordion
                  key={i}
                  defaultExpanded={item.expanded}
                >
                  <AccordionSummary
                    expandIcon={item.icon}
                  >
                    <Typography>{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography dangerouslySetInnerHTML={{ __html:item.content}} />
                  </AccordionDetails>
                </Accordion>
              )
            }

            if (item.type === "popup") {
              return (
                  <Box key={i}>
                    <Button
                      size="large"
                      variant="contained"
                      onClick={handleOpen}
                      fullWidth
                    >
                      {item.title}
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          {item.title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          {item.content}
                        </Typography>
                      </Box>
                    </Modal>
                  </Box>
              )
            }

            return false;

          })
        }
      </Stack>
    </Box >
  )
}