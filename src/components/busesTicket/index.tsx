import { makeStyles } from '@material-ui/styles';
import { Grid, Stack, TextField, Typography } from '@mui/material';
import SelectTextField from 'components/selectTextfield';
import React from 'react';
import { colors } from 'theme';
import LivingIcon from '@mui/icons-material/Living';
import Image from 'next/image';
import Reactangle from 'components/logos/reactangle';
import YellowReactangle from 'components/logos/yellowRectangle';
import RedReactangle from 'components/logos/redRectangle';
import BlueReactangle from 'components/logos/blueRectangle';
import CrosReactangle from 'components/logos/crosRectangle';
import BusFrame from 'components/logos/busFrame';
import Tripcoin from 'components/logos/tripcoin';

const useStyles = makeStyles({
  nameOfBus: {
    border: `1px solid ${colors.borderColor}`,
    padding: `4px 16px`,
    borderRadius: '20px',
    background: '#BBDDFF',
    fontSize: '18px',
    fontWeight: 600,
    color: colors.black,
  },
  indictorBg: {
    background: '#FAFAFA',
  },
  seatHighLight: {
    color: '#EF7E46',
  },
  ticketFont: {
    fontSize: '12px',
    fontWeight: 400,
    color: '#4C4C4C',
  },
  cussmallfont: {
    fontSize: '10px',
    fontWeight: 400,
    color: '#4C4C4C',
  },
  acFont: {
    fontSize: '16px',
    fontWeight: 600,
    color: colors.black,
  },
  divisionFont: {
    fontSize: '16px',
    fontWeight: 400,
    color: colors.black,
  },
});

const BusesTicket = () => {
  const classes = useStyles();
  return (
    <Grid container pt={2}>
      <Grid item md={12} xs={12}>
        <Stack direction="row" justifyContent="space-between">
          <Typography className={classes.acFont}>AC</Typography>
          <Typography className={classes.nameOfBus} ml={4}>
            Hanif Enterprize
          </Typography>
          <Stack direction="row">
            <Tripcoin />
            <Typography ml={1} className={classes.acFont}>
              55
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item md={12} xs={12} textAlign="center">
        <Typography className={classes.cussmallfont} mb={2} mt={1} ml={1}>
          31-DHK-CTG(D)
        </Typography>
      </Grid>

      <Grid item md={12}>
        <Grid container>
          <Grid item md={3} xs={12}>
            <Typography className={classes.ticketFont} gutterBottom>
              From
            </Typography>
            <Typography variant="h6">DHAKA</Typography>
            <Typography className={classes.acFont}>05:30 AM</Typography>
            <Typography variant="body2">Kolabagan Counter</Typography>
            <Typography className={classes.ticketFont}>22 June 2021</Typography>
          </Grid>
          <Grid item md={6} xs={12} textAlign="center" mt={2}>
            <Typography>
              <BusFrame />
            </Typography>

            <Typography variant="body1" className={classes.seatHighLight}>
              16 Seats available
            </Typography>
            <Typography className={classes.ticketFont}>6h 00m</Typography>
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography
              className={classes.ticketFont}
              display="block"
              gutterBottom
            >
              To{' '}
            </Typography>
            <Typography variant="h6">CHOTTOGRM</Typography>
            <Typography className={classes.acFont}>05:30 AM</Typography>
            <Typography variant="body2">Dampara Counter</Typography>
            <Typography className={classes.ticketFont}>23 June 2021</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} my={3}>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <SelectTextField label="Boarding Point" />
          </Grid>
          <Grid item md={6} xs={12}>
            <SelectTextField label="Dropping Point" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={12} py={2}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Stack flexDirection="row">
              <RedReactangle />
              <Typography ml={1}>3 SoldOut</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack flexDirection="row">
              <YellowReactangle />
              <Typography ml={1}>2 Booked</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack flexDirection="row">
              <Reactangle />
              <Typography ml={1}>2 Selected</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack flexDirection="row">
              <BlueReactangle />
              <Typography ml={1}>14 Availbel</Typography>
            </Stack>
          </Grid>
          <Grid item>
            <Stack flexDirection="row">
              <CrosReactangle />
              <Typography ml={1}>20 Blocked</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BusesTicket;
