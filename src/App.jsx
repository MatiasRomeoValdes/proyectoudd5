import React from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function App({id, title, description, price, imageUrl}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ imageUrl } />
    <Card.Body>
      <Card.Title>{ title }</Card.Title>
      <Card.Text>
       { description }
      </Card.Text>
      <Card.Text>
       { price }
      </Card.Text>
      <Button variant="primary">Ver</Button>
      <Button variant="primary">Agregar</Button>
    </Card.Body>
  </Card>
);
}


export default App;