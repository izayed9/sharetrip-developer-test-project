import { AppBar, Container, Grid, useMediaQuery } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import Logo from 'components/logos/sharetip-logo';
import Link from 'next/link';
import React from 'react';
import { theme, colors } from 'theme';
import NavMenu from './navbar/nav-menu/nav-menu';
import SmallScreenNav from './navbar/small-screen-nav';

const useStyles = makeStyles(() =>
  createStyles({
    appbar: {
      backgroundColor: 'rgba(56, 132, 247, 0.16)',
      boxShadow: 'none',
      borderBottom: `1px solid ${colors.lineColor}`,
      padding: '10px 0',
    },
    alignRight: {
      display: 'flex',
    },
  }),
);

const Header = () => {
  const classes = useStyles();
  const isSmScreen = useMediaQuery(theme.breakpoints.down(700));

  return (
    <AppBar position="static" color="transparent" className={classes.appbar}>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          spacing={2}
          flexWrap="nowrap"
        >
          <Grid item>
            <Link passHref href="/">
              <a>
                <Logo />
              </a>
            </Link>
          </Grid>
          <Grid
            item
            flexGrow={isSmScreen ? 0 : 1}
            className={classes.alignRight}
          >
            {isSmScreen ? <SmallScreenNav /> : <NavMenu />}
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};

export default Header;
