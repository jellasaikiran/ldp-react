import React from 'react';
import TextFiled from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
const textStyle=makeStyles({
    filedStyle:{
        marginTop:20,
    }
});
const TextFiledMui = () => {
    const classes=textStyle();

    return <div>
        <TextFiled variant="outlined"  className={classes.filedStyle} label="Email" p={2}  fullWidth required />
        <TextFiled variant="outlined"  className={classes.filedStyle} rows={4} multiline label="Note" p={2} margin='20' fullWidth required />
    </div>;
}

export default TextFiledMui;