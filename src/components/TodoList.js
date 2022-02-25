import { Fragment } from "react";
import { Paper, List, Divider } from "@material-ui/core";

import Todo from "./Todo";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          // <Fragment key={todo.task}>
          <>
            <Todo task={todo.task} key={todo.id} completed={todo.completed} />
            <Divider />
          </>
          // </Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
