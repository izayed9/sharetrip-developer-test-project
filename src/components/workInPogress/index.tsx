import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const WorkInProgress = () => {
  return (
    <Box sx={{ boxShadow: 2 }} p={4} mt={3}>
      <Grid container>
        <Grid item md={12}>
          <Typography>Work In Progress</Typography>
        </Grid>
        <Grid item my={2} md={12}>
          <Typography >Comming soon...</Typography>
        </Grid>
        <Grid item md={12}>
          <Typography>We will get</Typography>
        </Grid>
        <Grid item mt={4} md={12}>
          <Typography >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis aspernatur magni magnam labore dicta, dolorem at
            repellendus quia quasi obcaecati, laboriosam blanditiis facilis
            exercitationem. Repellendus reiciendis harum ullam quis quaerat
            assumenda corporis molestiae minus laudantium dolor veniam
            praesentium ea animi iure amet possimus sed distinctio error
            reprehenderit, placeat ipsum natus tenetur ut tempora? Harum enim
            corporis deserunt explicabo, distinctio sit at amet optio quaerat
            similique necessitatibus et cum nemo. Alias dolorem voluptate
            asperiores nisi dolor magnam consequatur saepe enim, modi doloribus
            fugiat qui harum, earum illo dignissimos porro ducimus corrupti quos
            natus rerum! Voluptatum nulla delectus amet ea ut eos.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkInProgress;
