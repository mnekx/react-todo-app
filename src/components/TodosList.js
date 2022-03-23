import React from 'react';
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
            handleTodoUpdateProps={this.props.handleTodoUpdateProps}
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;
