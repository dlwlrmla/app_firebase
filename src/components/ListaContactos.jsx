import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Contacto from './Contacto'
import db from "../firebase/firebaseConfig"
import { getDoc, getDocs, collection } from 'firebase/firestore'

const ListaContactos = () => {

const [contactos, setContactos ] = useState([])

useEffect(()=> {
    const obtenerDatos = async () => {
        const datos  = await getDocs(collection(db,"usuarios"))
        console.log(datos.docs[0].data())
        const contacts = []
        setContactos(datos.docs.map((documento) => {
            return {...documento.data(),id:documento.id}
        }))
    }
    obtenerDatos()
},[contactos])

  return (
      contactos.length > 0 &&
        <ContenedorContactos>   
            {
                contactos.map((contacto) => {
                    return <Contacto correo={contacto.correo}nombre={contacto.nombre}id={contacto.id} key={contacto.id} />
                })
            }
        </ContenedorContactos>
  )
}
const ContenedorContactos = styled.div`
    margin-top:40px;
`;

export default ListaContactos