import MenuIcon from '@mui/icons-material/Menu';
import Logo from 'components/logos/sharetip-logo';
import { Drawer, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { FC, useCallback, useState } from 'react';
import { theme, colors } from 'theme';
import NavMenu from './nav-menu/nav-menu';


const useStyles = makeStyles({
  icon: {
    color: colors.black,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  drawer: {
    padding: `0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  },
  logo: {
    display: 'block',
    padding: '8px 0',
  },
});

const SmallScreenNav: FC = () => {
  const classes = useStyles();
  const [openNav, setOpenNav] = useState(false);

  const closeNav = () => {
    setOpenNav(false);
  };

  const NavToggle = useCallback(() => {
    setOpenNav(!openNav);
  }, [openNav, setOpenNav]);

  return (
    <>
      <Drawer
        classes={{ paper: classes.drawer }}
        open={openNav}
        data-testid="small-screen-nav"
        onClose={closeNav}
      >
        <div className={classes.logo}>
          <Logo />
        </div>
        <NavMenu isVerticalMenu onCloseNav={closeNav} />
      </Drawer>
      <IconButton
        data-testid="small-screen-nav-button"
        onClick={NavToggle}
        className={classes.icon}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
export default SmallScreenNav;
