import React from 'react';
import TodoItem from './TodoItem';

// eslint-disable-next-line react/prefer-stateless-function
class TodosList extends React.Component {
  render() {
    const [todos, handleChangeProps, deleteTodoProps, handleTodoUpdateProps] = this.props;
    return (
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            handleChangeProps={handleChangeProps}
            deleteTodoProps={deleteTodoProps}
            handleTodoUpdateProps={handleTodoUpdateProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
