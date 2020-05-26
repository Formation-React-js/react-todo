import React, { Component } from 'react';
import { ListGroup, Button, Form } from "react-bootstrap";
import Todo from './todo';

class TodoList extends Component {
  state = {
    todoName: '',
    todos: [
      { name: "Acheter des patates" },
      { name: "Commander un presse-purée" },
      { name: "Préparer de la purée" },
      { name: "Mettre la table" },
    ],
  }

  handleSubmit = (event) => {
    const { todos, todoName } = this.state;
    // Empêche le rechargement de la page
    event.preventDefault();
    // Ajoute un nouvel élément dans la liste de tâches
    this.setState({
      todoName: '',
      todos: [...todos, { name: todoName }],
    });
  }

  render = () => {
    const { todoName, todos } = this.state;

    return (
      <>
        <ListGroup>
          {todos.map( (todo, index) =>
            <ListGroup.Item key={index}>
              <Todo name={todo.name} />
            </ListGroup.Item>
          )}
        </ListGroup>
        <Form onSubmit={this.handleSubmit}>
          <Form.Control
            type="text"
            // Cette propriété permet de faire en sorte qu'à chaque changements dans
            // le champ texte, la nouvelle valeur soit enregistrée dans une variable
            onChange={(event) =>
              this.setState({ todoName: event.target.value })
            }
            // Cette propriété permet de faire en sorte que la valeur du champ texte
            // soit contrôlée par une variable
            value={todoName}
          />
          <Button type="submit">Nouvelle tâche</Button>
        </Form>
      </>
    );
  }
}

export default TodoList;
