import { Fragment } from "react";
import { Paper, List, Divider } from "@material-ui/core";

import Todo from "./Todo";

function TodoList(props) {
  return (
    <Paper style={{ display: !props.todos.length && "none" }}>
      <List>
        {props.todos.map((todo) => (
          <Fragment key={todo.task}>
            <>
              <Todo
                task={todo.task}
                completed={todo.completed}
                id={todo.id}
                deleteTodo={props.deleteTodo}
                editTodo={props.editTodo}
                toggleCompleted={props.toggleCompleted}
              />
              <Divider />
            </>
          </Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
