import { Grid, Typography, Button, Box } from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { colors } from 'theme';

const useStyles = makeStyles({
  wrapper: {
    background: '#E5F2FE',
  },
  priceColor: {
    color: '#235FD8',
    fontWeight: 600,
    fontSize: '24px',
  },
  smallPriceColor: {
    color: colors.primary.main,
  },
});

const TicketSideBarTop = () => {
  const classes = useStyles();
  return (
    <Box px={2} pt={2} className={classes.wrapper}>
      <Grid container justifyContent="flex-end">
        <Grid item md={12} xs={12} textAlign="right">
          <Typography variant="body2">Per Person</Typography>
          <Typography className={classes.priceColor}>
            BDT 750
          </Typography>
          <Typography variant="h6" className={classes.smallPriceColor}>
            BDT 750
          </Typography>
        </Grid>
        <Grid item mt={2}>
          <Button variant="contained">View seats</Button>
        </Grid>
        <Grid item md={12} xs={12} my={2}>
          <Typography
            variant="body1"
            textAlign="right"
            className={classes.smallPriceColor}
          >
            Cancellation Policy
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TicketSideBarTop;
