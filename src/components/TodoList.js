import { useContext } from "react";
import { Fragment } from "react";
import { Paper, List, Divider } from "@material-ui/core";
import { TodosContext } from "./context/todos.context";

import Todo from "./Todo";

function TodoList() {
  const todos = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <Fragment key={todo.id}>
              <Todo {...todo} />
              {idx < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
