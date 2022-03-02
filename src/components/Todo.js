import { useContext } from "react";
import {
  Checkbox,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import useToggleState from "./hooks/useToggleState";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";

import { DispatchContext } from "./context/todos.context";
import EditTodoForm from "./EditTodoForm";

function ToDo({ id, task, completed }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const dispatch = useContext(DispatchContext);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleIsEditing={toggleIsEditing} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onChange={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            <span
              onClick={() => dispatch({ type: "TOGGLE", id: id })}
              style={{ userSelect: "none", cursor: "pointer" }}
            >
              {task}
            </span>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "DELETE", id: id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="edit" onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default ToDo;
