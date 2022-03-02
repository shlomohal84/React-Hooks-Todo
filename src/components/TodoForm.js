import { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { Paper, TextField } from "@material-ui/core";
import { DispatchContext } from "./context/todos.context";

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  // console.log("TODO FORM RENDER");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          dispatch({ type: "ADD", task: value });
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
