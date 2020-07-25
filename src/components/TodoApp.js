import React, { useState } from "react";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Limpar o monitor", completed: false },
    { id: 2, task: "Arrumar minha mesa", completed: true },
    { id: 3, task: "Reescrever os post it's", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

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
        <ToolBar>
          <Typography color="inherit">Todo com Hooks</Typography>
        </ToolBar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
