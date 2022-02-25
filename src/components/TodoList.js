import { Fragment } from "react";
import { Paper, List, Divider } from "@material-ui/core";

import Todo from "./Todo";

function TodoList({ todos, deleteTodo, editTodo, toggleCompleted }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, idx) => (
            <Fragment key={todo.id}>
              <Todo
                {...todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleCompleted={toggleCompleted}
              />
              {idx < todos.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
