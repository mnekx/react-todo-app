import React, { useState } from 'react';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({});

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title) {
      props.addTodoProps(inputText.title);
      setInputText({
        ...inputText,
        [e.target.name]: e.target.value,
      });
    } else {
      alert('Please enter title');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        onChange={handleChange}
        placeholder="Add Todo..."
        name="title"
        value={inputText.title}
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
