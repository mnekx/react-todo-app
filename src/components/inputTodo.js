import React, { Component } from 'react';

class InputTodo extends Component {
  state = {
    title: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title) {
      this.props.addTodoProps(this.state.title);
      this.setState({ title: '' });
    } else {
      alert('Please enter title');
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          onChange={this.handleChange}
          placeholder="Add Todo..."
          name="title"
          value={this.state.title}
        />
        <button className="input-submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
