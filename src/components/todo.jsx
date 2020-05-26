import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import './todo.css';

// Les composants qui ont besoin de gérer un état doivent être
// écrits sous forme d'une classe
class Todo extends Component {
  // Le nom réservé "state" doit contenir un objet Javascript
  // contenant une collection de clés/valeurs pour chaque propriété
  // dont il faut suivre l'état
  state = {
    checked: false,
  }

  // Le nom réservé "render" doit contenir une méthode qui renvoie
  // le code JSX permettant d'afficher le composant
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
        // Attention: écrire les fonctions en syntaxe ES5 pose un problème
        // avec le mot-clé this. L'écriture suivante est à proscrire:
        // onChange={function(event) {
        //   this.setState({ checked: event.target.checked })
        // }}
        className={`Todo ${checked ? 'checked' : ''}`}
      />
    );
  }
}

export default Todo;
