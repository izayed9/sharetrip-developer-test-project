import { Box, Grid } from '@mui/material';
import BusesTicket from 'components/busesTicket';
import TicketSidebar from 'components/ticketSidebar';
import React from 'react';

const TabBody = () => {
  return (
    <Box sx={{ boxShadow: 2 }} pl={3} mt={2}>
        <Grid container>
          <Grid item md={8} xs={12} pr={3}>
            <BusesTicket />
          </Grid>
          <Grid item md={4} xs={12}>
            <TicketSidebar />
          </Grid>
        </Grid>
    </Box>
  );
};

export default TabBody;
