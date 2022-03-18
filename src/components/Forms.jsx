import { TextField, Button, Paper } from "@mui/material";
import React, { useState } from "react";

export default function Form() {
  const [text, setText] = useState(null);

  return (
    <Paper style={{ padding: "1em" }}>
      <div></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Task"
          variant="outlined"
          fullWidth
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="text" onClick={() => console.log(text)}>
          Add
        </Button>
      </div>
    </Paper>
  );
}
