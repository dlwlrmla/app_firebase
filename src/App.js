import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Formulario from './components/Formulario';
import { collection, getDocs } from "firebase/firestore"
import db from "./firebase/firebaseConfig"
import ListaContactos from './components/ListaContactos';

const App = () => {

useEffect (()=> {
  const obtenerDatos = async() => {
    const datos = await getDocs(collection(db, "usuarios"))
    console.log(datos.docs[0].data())
  }
  obtenerDatos()
 

},[])

  return (
    <Contenedor>
        <Titulo>Lista de Contactos</Titulo>
        <Formulario/>
        <ListaContactos/>
    </Contenedor>
  )
}
const Contenedor = styled.div`
    margin: 40px;
    width: 90%;
    max-width: 400px;
    background: #fff;
    padding: 40px;
    border-radius: 5px;
    text-align: center;
`;
 
const Titulo = styled.h2`
    margin-bottom: 10px;
`;
export default App