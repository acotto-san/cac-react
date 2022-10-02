import React, { useState } from 'react'
import EjercicioHijo from './EjercicioHijo'


const Ejercicio = () => {

  const [visibilidadHijo, setvisibilidadHijo] = useState(true)
  
  const mostrarOcultarHijo = () => {
    setvisibilidadHijo((prev)=> !prev)
  }
  
  return (
    <>
    <div>hola te mando un texto</div>
    <button onClick={mostrarOcultarHijo}>Mostrar/ocultar el hijo</button>
    <br /><br />

    {visibilidadHijo && <EjercicioHijo mostrarOcultarHijo={mostrarOcultarHijo}/>}
    </>
  )
}

export default Ejercicio