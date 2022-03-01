import { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

import { TodosContext } from "./context/todos.context";

function EditTodoForm({ id, task, toggleIsEditing }) {
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        editTodo(id, value);
        toggleIsEditing();
        reset();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
