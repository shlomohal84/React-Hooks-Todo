import useLocalStorageState from "./useLocalStorageState";
import { v4 as uuid4 } from "uuid";

const useTodoState = (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: uuid4(), task: newTodoText, completed: false },
      ]);
    },
    deleteTodo: (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    toggleCompleted: (id, completed) => {
      setTodos(
        todos.map((todo) => {
          return id === todo.id
            ? { ...todo, completed: !completed }
            : { ...todo };
        })
      );
    },
    editTodo: (id, newTask) => {
      setTodos(
        todos.map((todo) => {
          return id === todo.id ? { ...todo, task: newTask } : { ...todo };
        })
      );
    },
  };
};

export default useTodoState;
