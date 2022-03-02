import { useContext } from "react";
import { TextField } from "@material-ui/core";
import useInputState from "./hooks/useInputState";

import { DispatchContext } from "./context/todos.context";

function EditTodoForm({ id, task, toggleIsEditing }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  // console.log("EDIT FORM RENDER");

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
        dispatch({
          type: "EDIT",
          id: id,
          newTask: value,
        });
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
