
import {TextField, Button, Paper} from "@mui/material";
import React from 'react';

export default function Form(){
  return(
    <Paper>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="text" >Add</Button>
    </Paper>
  )
}