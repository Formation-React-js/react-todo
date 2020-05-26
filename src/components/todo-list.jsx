import React, { useState } from 'react';
import { ListGroup, Button, Form } from "react-bootstrap";
import Todo from './todo';

const initialTodos = [
  { name: "Acheter des patates", checked: false },
  { name: "Commander un presse-purée", checked: false },
  { name: "Préparer de la purée", checked: false },
  { name: "Mettre la table", checked: false },
];

const TodoList = () => {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState(initialTodos);

  const handleSubmit = (event) => {
    // Empêche le rechargement de la page
    event.preventDefault();
    // Ajoute un nouvel élément dans la liste de tâches
    setTodos([...todos, { name: todoName }]);
    setTodoName('');
  }

  // Cette fonction génère une copie de la fonction qui est réellement utilisée
  // par le composant Todo pour modifier l'état d'une tâche, dans laquelle
  // l'index de la tâche ("todoIndex") est remplacé par l'index de la donnée
  // auquel le composant Todo est lié
  const checkTodo = (todoIndex) => (event) => {
    // Remplace la liste de tâches actuelle par une nouvelle liste
    // dans laquelle chaque élément est remplacé...
    setTodos(todos.map( (todo, index) =>
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
    ));
  }

  return (
    <>
      <ListGroup>
        {todos.map( (todo, index) =>
          <ListGroup.Item key={index}>
            <Todo
              name={todo.name}
              checked={todo.checked}
              checkTodo={checkTodo(index)}
            />
          </ListGroup.Item>
        )}
      </ListGroup>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          // Cette propriété permet de faire en sorte qu'à chaque changements dans
          // le champ texte, la nouvelle valeur soit enregistrée dans une variable
          onChange={(event) =>
            setTodoName(event.target.value)
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

export default TodoList;
