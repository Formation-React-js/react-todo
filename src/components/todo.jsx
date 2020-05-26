import React from 'react';
import { Form } from 'react-bootstrap';
import './todo.css';

const Todo = ({ name, checked, checkTodo }) => {
  return (
    <Form.Check      
      custom
      inline
      label={name}
      type="checkbox"
      id={`checkbox-${name}`}
      onChange={checkTodo}
      // Attention: écrire les fonctions en syntaxe ES5 pose un problème
      // avec le mot-clé this. L'écriture suivante est à proscrire:
      // onChange={function(event) {
      //   this.setState({ checked: event.target.checked })
      // }}
      className={`Todo ${checked ? 'checked' : ''}`}
    />
  );
}

export default Todo;
