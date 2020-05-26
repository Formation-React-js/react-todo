import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './todo.css';

class Todo extends Component {
  state = {
    checked: false,
  }

  render = () => {
    const { name } = this.props;
    const { checked } = this.state;

    return (
      <Form.Check
        custom
        inline
        label={name}
        type="checkbox"
        id={`checkbox-${name}`}
        onChange={(event) =>
          this.setState({ checked: event.target.checked })
        }
        className={`Todo ${checked ? 'checked' : ''}`}
      />
    );
  }
}

export default Todo;
