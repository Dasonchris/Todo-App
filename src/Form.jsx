import React from "react";
import { useState } from "react";

function Form(props) {
  const [name, setName] = useState(" ");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName(" ");
    // alert("Task added!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-Todo-input" className="label__lg</label>">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-Todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;