import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './inputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  function getInitialTodos() {
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    ]);
  };
  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        title,
        id: uuidv4(),
        completed: false,
      },
    ]);
  };
  const handleTodoUpdate = (title, id) => {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          // eslint-disable-next-line no-param-reassign
          todo.title = title;
        }
        return todo;
      }),
    ]);
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodo} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          handleTodoUpdateProps={handleTodoUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
