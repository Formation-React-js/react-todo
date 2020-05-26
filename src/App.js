import React from 'react';
import { Container } from 'react-bootstrap';
import TodoList from './components/todo-list';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Container>
      <TodoList />
    </Container>
  );
}

export default App;
