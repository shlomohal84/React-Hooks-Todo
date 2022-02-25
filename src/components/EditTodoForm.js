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
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
      />
      <button>Save</button>
    </form>
  );
}

export default EditTodoForm;

// <div
//   style={{
//     display: "flex",
//     justifyContent: "flex-end",
//     width: "100%",
//   }}
// >
//   <TextField
//     value={value}
//     onChange={handleChange}
//     style={{ width: "max-content" }}
//   />
//   <div>
//     <button onClick={handleUpdate}>Save</button>
//     <button onClick={toggleEdit}>cancel</button>
//   </div>
// </div>
