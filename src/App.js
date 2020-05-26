import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import Todo from './components/todo';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <ListGroup>
        <ListGroup.Item>
          <Todo name="Acheter des patates" />
        </ListGroup.Item>
        <ListGroup.Item>
          <Todo name="Commander un presse-purée" />
        </ListGroup.Item>
        <ListGroup.Item>
          <Todo name="Préparer de la purée" />
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default App;
