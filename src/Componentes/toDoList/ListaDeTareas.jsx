import React from 'react'
import Tareas from './Tareas'

const ListaDeTareas = ({listaDeTareas}) => {

    

    const listaTareasActivas = listaDeTareas.map( (tarea) => 
        !tarea.borrada && <Tareas key={tarea.id.toString()} tarea={tarea}/>
    )

  return (
    <>
    {listaTareasActivas}
    </>
  )
}

export default ListaDeTareas