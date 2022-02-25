import { useState, useEffect } from "react";
import { Typography, Paper, AppBar, Toolbar, Grid } from "@material-ui/core";
import { v4 as uuid4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  // const initialTodos = [
  //   { id: 1, task: "Clean Fishtank", completed: false },
  //   { id: 2, task: "Wash Car", completed: true },
  //   { id: 3, task: "Grow Beard", completed: false },
  // ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuid4(), task: newTodoText, completed: false }]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id, newTask) => {
    setTodos(
      todos.map((todo) => {
        return id === todo.id ? { ...todo, task: newTask } : { ...todo };
      })
    );
  };

  const toggleCompleted = (id, completed) => {
    setTodos(
      todos.map((todo) => {
        return id === todo.id
          ? { ...todo, completed: !completed }
          : { ...todo };
      })
    );
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleCompleted={toggleCompleted}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
