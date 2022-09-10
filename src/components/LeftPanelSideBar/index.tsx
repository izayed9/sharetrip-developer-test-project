import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { colors } from 'theme';
import SectionBar from 'components/logos/sectionBar';
import DeprutureIcon from 'components/logos/deprutureIcon';
const useStyles = makeStyles({
  sidePanelHeading: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: '14px',
  },
  restfont: {
    color: colors.primary.main,
    fontWeight: 500,
    fontSize: '16px',
  },
  borderLavel: {
    border: `1px solid ${colors.borderColor}`,
    padding: `10px, 8px, 10px, 8px`,
    width: '100%',
    display: 'block',
    borderRadius: '3px',
    fontSize: '16px',
    fontWeight: '500',
  },
  borderBottom: {
    borderBottom: `1px solid ${colors.borderColor}`,
    paddingBottom: `10px`,
  },
  price: {
    fontSize: '12px',
    fontWeight: 400,
  },
  priceNum: {
    fontSize: '16px',
    fontWeight: 700,
    marginTop: '4px',
  },
  titleFontSidebar: {
    color: '#000000',
    fontWeight: 500,
    fontSize: '16px',
  },
  borderBottomClass: {
    borderBottom: `1px solid ${colors.borderColor}`,
    color: '#000000',
    fontWeight: 500,
    fontSize: '16px',
    paddingBottom: `10px`,
  },
});

const LeftPanelSideBar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ boxShadow: 2 }} p={2}>
      <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography className={classes.sidePanelHeading}>
              Sort & Filter
            </Typography>
            <Typography className={classes.restfont}>RESET</Typography>
          </Stack>
        </Grid>
        <Grid item md={12} xs={12}>
          <Typography className={classes.titleFontSidebar}>
            Price Range
          </Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="column">
              <Typography className={classes.price}>Minimum Price</Typography>
              <Typography className={classes.priceNum}>500</Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              <Typography className={classes.price}>Maximum Price</Typography>
              <Typography className={classes.priceNum}>3,212</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={12} xs={12}>
          <SectionBar />
        </Grid>
        <Grid item md={12} xs={12}>
          <Typography className={classes.borderBottomClass}>Class</Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="AC (40)" />
            <FormControlLabel control={<Checkbox />} label="Non AC (24)" />
          </FormGroup>
        </Grid>
        <Grid item md={12} xs={12}>
          <Typography className={classes.borderBottomClass}>
            Schedule
          </Typography>
        </Grid>

        <Grid item md={12} xs={12}>
          <Typography variant="body1" mt={2}>Departure Time</Typography>
        </Grid>
        <Grid item md={12} xs={12}>
          <List>
            <ListItem className={classes.borderLavel}>
              <Stack flexDirection="row">
                <DeprutureIcon />
                <Typography variant="h6" ml={1}>
                  00:00 - 05:59
                </Typography>
              </Stack>
            </ListItem>
            <ListItem className={classes.borderLavel}>
              <Stack flexDirection="row">
                <DeprutureIcon />
                <Typography variant="h6" ml={1}>
                  06:00 - 11:59
                </Typography>
              </Stack>
            </ListItem>
            <ListItem className={classes.borderLavel}>
              <Stack flexDirection="row">
                <DeprutureIcon />
                <Typography variant="h6" ml={1}>
                  12:00 - 17:59
                </Typography>
              </Stack>
            </ListItem>
            <ListItem className={classes.borderLavel}>
              <Stack flexDirection="row">
                <DeprutureIcon />
                <Typography variant="h6" ml={1}>
                  18:00 - 23:59
                </Typography>
              </Stack>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LeftPanelSideBar;
