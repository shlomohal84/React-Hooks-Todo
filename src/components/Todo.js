import useInputState from "./hooks/useInputState";
import { useState } from "react";
import {
  Checkbox,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  TextField,
} from "@material-ui/core";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";

function ToDo({ task, completed, id, deleteTodo, editTodo, toggleCompleted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, handleChange /* reset */] = useInputState(task);

  const handleDelete = () => {
    deleteTodo(id);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = () => {
    editTodo(id, value);
    toggleEdit();
  };

  const handleIsCompleted = () => {
    toggleCompleted(id, completed);
  };
  return (
    <>
      {!isEditing ? (
        <ListItem>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onChange={handleIsCompleted}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            <span
              onClick={handleIsCompleted}
              style={{ userSelect: "none", cursor: "pointer" }}
            >
              {task}
            </span>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={toggleEdit}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <TextField
            value={value}
            onChange={handleChange}
            style={{ width: "max-content" }}
          />
          <div>
            <button onClick={handleUpdate}>Save</button>
            <button onClick={toggleEdit}>cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ToDo;
