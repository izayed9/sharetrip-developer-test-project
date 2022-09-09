import { Box, Grid, Stack, Typography } from '@mui/material';

import React from 'react';
import SortPanel from 'components/sortPanel';
import BusesTicket from 'components/busesTicket';
import TicketSidebar from 'components/ticketSidebar';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  bodyTitle: {
    fontWeight: 500,
    fontSize: '16px',
  },
});

const BusesInformation = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item md={12}>
          <Typography className={classes.bodyTitle} mb={1}>
            48 Available Buses
          </Typography>
        </Grid>
        <Grid item md={12}>
          <SortPanel />
        </Grid>
        <Box sx={{ boxShadow: 2 }} pl={3} mt={2}>
          <Grid item md={12}>
            <Grid container>
              <Grid item md={8} pr={3}>
                <BusesTicket />
              </Grid>
              <Grid item md={4}>
                <TicketSidebar />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* <SortTabPanel/> */}
    </>
  );
};

export default BusesInformation;
