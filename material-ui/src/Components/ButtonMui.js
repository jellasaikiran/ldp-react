import React from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { ButtonGroup } from '@mui/material';


const ButtonMui = () => {
    return (<div>
          <Button p={3}  startIcon={<DeleteIcon />} align="center"  component="div">
        Delete
      </Button>
      <Button p={3} variant='contained' mt={2} align="center">
        Hello
      </Button>
      <Button p={3}   onClick={()=>alert("Hey Hello")} align="center" disabled>
        World
      </Button>
      <Button p={3}   align="center" variant='outlined' >
        Wait
      </Button>
      <Button p={3}   align="center" endIcon={<SendIcon />} >
        Send
      </Button>
      
      <ButtonGroup color='secondary' disableElevation >
        <Button>BG One</Button>
        <Button>BG Two</Button>
        <Button>BG Three</Button>
      </ButtonGroup>
    </div>);
}

export default ButtonMui;