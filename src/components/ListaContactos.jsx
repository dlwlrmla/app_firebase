import React, { useState } from 'react'
import styled from "styled-components"
import Contacto from './Contacto'

const ListaContactos = () => {

const [contactos, setContactos ] = useState([
    {id:1, nombre:"Carlos", correo:"correo"},
    {id:2, nombre:"Arturo", correo:"correo2"}
])

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