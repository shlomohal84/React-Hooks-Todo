import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, toggleIsEditing, editTodo }) {
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
