import React, { Component } from 'react';
import { ListGroup, Button, Form } from "react-bootstrap";
import Todo from './todo';

// Les composants qui ont besoin de gérer un état doivent être
// écrits sous forme d'une classe
class TodoList extends Component {
  // Le nom réservé "state" doit contenir un objet Javascript
  // contenant une collection de clés/valeurs pour chaque propriété
  // dont il faut suivre l'état
  state = {
    todoName: '',
    todos: [
      { name: "Acheter des patates", checked: false },
      { name: "Commander un presse-purée", checked: false },
      { name: "Préparer de la purée", checked: false },
      { name: "Mettre la table", checked: false },
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

  // Cette fonction génère une copie de la fonction qui est réellement utilisée
  // par le composant Todo pour modifier l'état d'une tâche, dans laquelle
  // l'index de la tâche ("todoIndex") est remplacé par l'index de la donnée
  // auquel le composant Todo est lié
  checkTodo = (todoIndex) => (event) => {
    const { todos } = this.state;
    this.setState({
      // Remplace la liste de tâches actuelle par une nouvelle liste
      // dans laquelle chaque élément est remplacé...
      todos: todos.map( (todo, index) =>
        // ...si l'élément est celui que nous souhaitons modifier...
        index === todoIndex ?
          {
            // ...on garde l'ensemble de ses propriétés actuelles...
            ...todo,
            // ...puis on modifie la propriété "checked"
            checked: event.target.checked
          }
        // ...sinon, on garde l'objet non modifié
        : todo
      ),
    });
  }

  // Le nom réservé "render" doit contenir une méthode qui renvoie
  // le code JSX permettant d'afficher le composant
  render = () => {
    const { todoName, todos } = this.state;

    return (
      <>
        <ListGroup>
          {todos.map( (todo, index) =>
            <ListGroup.Item key={index}>
              <Todo
                name={todo.name}
                checked={todo.checked}
                checkTodo={this.checkTodo(index)}
              />
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
