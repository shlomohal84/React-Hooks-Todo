import useInputState from "./hooks/useInputState";
import { Paper, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
