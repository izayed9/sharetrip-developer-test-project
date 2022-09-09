import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/styles';
import {colors} from 'theme'
const useStyles = makeStyles({
  resize:{
    fontSize: '15px',
    fontWeight: 400,
    color:colors.black
  },
});

const counters = [
  {
    value: 'Kalabagan Center',
    label: 'Kalabagan Center',
  },
  {
    value: 'Kalabagan Center',
    label: 'Kalabagan Center',
  },
  {
    value: 'Kalabagan Center',
    label: 'Kalabagan Center',
  },
  {
    value: 'Kalabagan Center',
    label: 'Kalabagan Center',
  },
];

interface IProps {
  label: string;
}

const SelectTextField = (props: IProps) => {
  const classes =useStyles()
  const { label } = props;
  const [counter, setCounter] = React.useState('Kalabagan Center');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCounter(event.target.value);
  };
  return (
    <div>
      <TextField
        id="outlined-select-currency"
        select
        label={label}
        value={counter}
        onChange={handleChange}
        fullWidth
        InputProps={{
          classes: {
            input: classes.resize,
          },
        }}
      >
        {counters.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default SelectTextField;
