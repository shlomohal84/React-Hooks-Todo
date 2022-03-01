import { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release lady bugs into garden", completed: true },
];
export const TodoContext = createContext();

export function TodosProvider(props) {
  const todoStuff = useTodoState(defaultTodos);
  return (
    <TodoContext.Provider value={todoStuff}>
      {props.children}
    </TodoContext.Provider>
  );
}
