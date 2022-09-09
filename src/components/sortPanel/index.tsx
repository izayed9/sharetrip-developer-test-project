import { Box, Grid, Stack, Typography } from '@mui/material';
import DiamondIcon from 'components/logos/diamondIcon';
import Thunder from 'components/logos/thunder';
import Chepest from 'components/logos/chepest';
import React from 'react';
import { colors } from 'theme';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  chepsetBg: {
    background: colors.primary.main,
    padding: '10px 16px',
  },
  wrapper: {
    
    border: `1px solid #F6F6F6`,
    boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.12)`,
    borderRadius: `3px`,
  },
  corlrFont: {
    fontweight: 400,
    fontSize: '14px',
    color: '#000000',
  },
  itemPaddin: {
    padding: '10px 16px',
  },
});

const SortPanel = () => {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Grid container className={classes.corlrFont}>
        <Grid item md={3} xs={12} className={classes.itemPaddin} >
          <Stack direction="row" alignItems="center" spacing={1}>
            <DiamondIcon />
            <Typography>Earliest Buses</Typography>
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} className={classes.chepsetBg}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Chepest />
            <Typography>Earliest Buses</Typography>
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} className={classes.itemPaddin}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Thunder />
            <Typography>Available Seats</Typography>
          </Stack>
        </Grid>
        <Grid item md={3} xs={12} className={classes.itemPaddin}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Thunder />
            <Typography variant="body1">Fastest Trips</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SortPanel;
