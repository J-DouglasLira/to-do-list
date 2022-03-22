import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TodoItem from "./TodoItem";
import { TextField } from "@mui/material";






export default function EditTodoDialog({ open, dialogHandler, todo, editTodo }) {

  const [editedTodo, setEditedTodo] = React.useState(todo.text);

  

  return (
    <Dialog
      open={open}
      onClose={dialogHandler}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"To-do edit"}
      </DialogTitle>
      <DialogContent>
        <TextField defaultValue = {editedTodo} onChange = {(e) => setEditedTodo(e.target.value)} fullWidth     />
      </DialogContent>
      <DialogActions>
        <Button onClick={dialogHandler}>Cancel</Button>
        <Button >Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
