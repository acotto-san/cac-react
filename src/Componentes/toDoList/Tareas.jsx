import React from 'react'

const Tareas = ({tarea}) => {

    const borrarTarea = () => {
        tarea.borrada = true;
    }

  return (
   <>
    <li> nombre: {tarea.nombre} id: {tarea.id}</li>
    <button onClick={borrarTarea}>Borrame</button>
   </>
  )
}

export default Tareas