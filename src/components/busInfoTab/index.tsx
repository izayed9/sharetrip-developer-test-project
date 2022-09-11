import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar, Stack } from '@mui/material';
import Reactangle from 'components/logos/reactangle';
import DiamondIcon from 'components/logos/diamondIcon';
import Chepest from 'components/logos/chepest';
import Thunder from 'components/logos/thunder';
import TabBody from 'components/tabBody';
import { makeStyles } from '@mui/styles';
import WorkInProgress from 'components/workInPogress';
import {theme} from 'theme'


const useStyles = makeStyles({
  tabs: {
    '& button': {
      minHeight: '48px',
      padding: '1px 44px 1px 20px ',
      [theme.breakpoints.down("md")]: {
        maxWidth: "0",
        padding:'20px 0px'

      }
    },

  },
  sortRadious: {
    borderRadius: '4px',
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BusInfoTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
        }}
      >
        <Box sx={{ boxShadow: 2 }} className={classes.sortRadious}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={classes.tabs}
          >
            <Tab
              label="Earliest Buses"
              {...a11yProps(0)}
              iconPosition="start"
              icon={<DiamondIcon />}
            />
            <Tab
              label="Cheapest Buses"
              {...a11yProps(1)}
              iconPosition="start"
              icon={<Chepest />}
            />

            <Tab
              label="Available Seats"
              {...a11yProps(2)}
              iconPosition="start"
              icon={<Thunder />}
            />
            <Tab
              label="Fastest Trips"
              {...a11yProps(3)}
              iconPosition="start"
              icon={<Thunder />}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <WorkInProgress />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabBody />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <WorkInProgress />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <WorkInProgress />
        </TabPanel>
      </Box>
    </>
  );
}
