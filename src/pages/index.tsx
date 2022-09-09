import { Grid, Container, Box } from '@mui/material';
import LeftPanelSideBar from 'components/LeftPanelSideBar';;
import Header from 'components/genarel/header';
import BusesInformation from 'components/busesInformation';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={3}>
            <LeftPanelSideBar />
          </Grid>
          <Grid item md={9}>
            <BusesInformation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
