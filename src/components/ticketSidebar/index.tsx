import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import TicketSideBarTop from './ticketSideBarTop';
import { makeStyles } from '@mui/styles';
import { colors } from 'theme';
import SeatIcon from 'components/logos/seatIcon';

const useStyles = makeStyles({
  leftBorder: {
    borderLeft: `1px solid ${colors.borderColor}`,
  },
  bottomBorder: {
    borderBottom: `1px solid ${colors.borderColor}`,
  },
  priceLabel: {
    fontWeight: 500,
    fontSize: '16px',
    color: '#000000',
  },
  totalPrice: {
    fontWeight: 600,
    fontSize: '16px',
    color: '#000000',
  },
  serviceFont: {
    color: colors.primary.main,
  },
  sarviceColor: {
    color: '#4C4C4C',
    whiteSpace: 'nowrap',
  },
});

const TicketSidebar = () => {
  const classes = useStyles();
  return (
    <>
      <TicketSideBarTop />
      <Grid
        container
        justifyContent="flex-end"
        className={classes.leftBorder}
        p={2}
      >
        <Grid item md={12} xs={12} mt={1}>
          <Stack direction="row">
            <Button variant="contained" fullWidth>
              SEAT INFO
            </Button>
            <Button variant="outlined" fullWidth>
              POLICY
            </Button>
          </Stack>
        </Grid>
        <Grid item md={12} xs={12} mt={3} mb={2}>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Stack direction="row">
              <SeatIcon />
              <Typography variant="body2" mx={2}>
                B4
              </Typography>
              <Typography variant="body2">B-Class</Typography>
            </Stack>
            <Typography className={classes.priceLabel}>BDT 750</Typography>
          </Stack>
        </Grid>
        <Grid item md={12} xs={12}>
          <Stack
            direction="row"
            spacing={2}
            className={classes.bottomBorder}
            justifyContent="space-between"
          >
            <Stack direction="row">
              <SeatIcon />
              <Typography variant="body2" mx={2}>
                B4
              </Typography>
              <Typography variant="body2">B-Class</Typography>
            </Stack>
            <Typography className={classes.priceLabel}>BDT 750</Typography>
          </Stack>
        </Grid>
        <Grid item md={12} xs={12} mt={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body2">Charge :</Typography>
            <Typography mb={1} className={classes.priceLabel}>
              BDT 50
            </Typography>
          </Stack>
        </Grid>
        <Grid item md={12} xs={12}>
          <Stack
            direction="row"
            className={classes.bottomBorder}
            justifyContent="space-between"
          >
            <Typography variant="body2">Insurance :</Typography>
            <Typography className={classes.priceLabel}>BDT 50</Typography>
          </Stack>
        </Grid>
        <Grid item md={12} mt={2} xs={12}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="body1">Sub Total :</Typography>
            <Typography className={classes.totalPrice}>BDT 1,570</Typography>
          </Stack>
        </Grid>
        <Grid item md={12} mt={4} xs={12}>
          <FormControlLabel
            className={classes.sarviceColor}
            control={<Checkbox />}
            label="I want to avail Insurance Service"
          />
        </Grid>
        <Grid item md={12} xs={12}>
          <Button fullWidth variant="contained">
            Select & Continue to return
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TicketSidebar;
