import React from 'react'

const EjercicioHijo = ({mostrarOcultarHijo}) => {


  return (
    <>
    <div>EjercicioHijo is alive</div>

    <button onClick={mostrarOcultarHijo}>ocultar a mi mismo</button>
    </>
  )
}

export default EjercicioHijo