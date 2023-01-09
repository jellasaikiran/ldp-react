import { Button, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
const customStyles=makeStyles({
    btnStyle:{
      color:"cyan",
      fontStyle:"oblique",
      '&:hover':{
        color:"Yellow"
      },
    }
  });
const StylesMui = () => {
    const classes=customStyles();
    return <div>
        <Typography  
        variant="h2"
        p={10}
        mt={10}
        className={classes.btnStyle}
        align="center"
        bgcolor="red"
        component="div" >Welcome</Typography>

       
    </div>;
}

export default StylesMui;