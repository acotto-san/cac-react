import React, { useEffect } from 'react'

const Tareas = ({ tarea, setchildHook }) => {

  const actualizarPadre = () => {
    setchildHook((prev) => !prev)
  }

  const cambiarBorrada = () => {
    tarea.borrada = !tarea.borrada;
    actualizarPadre()
  }

  const handleChange = () => {
    tarea.activa = !tarea.activa
    actualizarPadre()
  }


  return (
    <>
      <li className={!tarea.activa ? "strikethrough" : undefined}>
        <input type="checkbox" checked={!tarea.activa} onChange={handleChange} />

        {tarea.nombre}

        <button onClick={cambiarBorrada}>{tarea.borrada ? "RESTAURAR" : "BORRAR"}</button>
      </li>

    </>
  )
}

export default Tareas