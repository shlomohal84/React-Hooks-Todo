import { Fragment } from "react";
import { Paper, List, Divider } from "@material-ui/core";

import Todo from "./Todo";

function TodoList(props) {
  return (
    <Paper>
      {props.todos.length ? (
        <List>
          {props.todos.map((todo, idx) => (
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
                {idx < props.todos.length - 1 && <Divider />}
              </>
            </Fragment>
          ))}
        </List>
      ) : null}
    </Paper>
  );
}

export default TodoList;
