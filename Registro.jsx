import { useState, useEffect } from 'react';
import './App.css';




const Contacto = () => {

  const [nombre, setNombre] = useState('');

  const [email, setEmail] = useState('');

  const [telefono, setTelefono] = useState('');

  const [rut, setRut] = useState('');




  function validarFormulario(e) {

    e.preventDefault();

    if (nombre === '' || email === ''|| rut === ''|| telefono === '') {

      alert('Todos los campos se deben llenar');

      return;

    }
  }}
