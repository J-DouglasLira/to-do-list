import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import EditTodoDialog from "./EditTodoDialog";

export default function TodoItem({ todo, deleteTodo }) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <EditTodoDialog open={openDialog} dialogHandler={dialogHandler} />
      <Paper>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon
                onClick={() => {
                  deleteTodo(todo.id);
                }}
              />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </ListItemIcon>
            <ListItemText onClick = {()=>setOpenDialog(true)} primary={todo.text} />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
