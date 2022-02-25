import {
  Checkbox,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import useToggleState from "./hooks/useToggleState";
import { Delete as DeleteIcon, Edit as EditIcon } from "@material-ui/icons";

import EditTodoForm from "./EditTodoForm";

function ToDo({ id, task, completed, deleteTodo, editTodo, toggleCompleted }) {
  const [isEditing, toggleIsEditing] = useToggleState(false);

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleIsCompleted = () => {
    toggleCompleted(id, completed);
  };
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          // isEditing={isEditing}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <>
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
