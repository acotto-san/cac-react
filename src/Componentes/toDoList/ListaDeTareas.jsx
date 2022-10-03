import React, { useState, useEffect } from 'react'
import Tareas from './Tareas'

const ListaDeTareas = ({ listaDeTareas }) => {

  const [childHook, setchildHook] = useState(false)
  const [verBorradas, setVerBorradas] = useState(false)

  const listaBorradas = () => {
    return listaDeTareas.map((tarea) => tarea.borrada && <Tareas key={tarea.id.toString()}
      tarea={tarea} setchildHook={setchildHook} />)
  }

  const visibilidadBorradas = () => {
    setVerBorradas((prev) => !prev)
  }

  const hayTareasBorradas = () => {
    return listaDeTareas.find((tarea) => tarea.borrada)
  }



  return (
    <>

      <div className='lista-de-tareas'>
        <h3>Lista de tareas</h3>
        
        <input type="checkbox" checked={verBorradas} onChange={visibilidadBorradas} id="verBorradas" />
        <label htmlFor="verBorradas">Ver eliminadas</label>
        
        <div>
        {
          listaDeTareas.map((tarea) => (!tarea.borrada && tarea.activa) && <Tareas key={tarea.id.toString()}
          tarea={tarea} setchildHook={setchildHook} />)
        }
        </div>
        <div>
        {
          listaDeTareas.map((tarea) => (!tarea.borrada && !tarea.activa) && <Tareas key={tarea.id.toString()}
          tarea={tarea} setchildHook={setchildHook} />)
        }
        </div>

      </div>


      {
        (verBorradas && hayTareasBorradas()) &&
        <>
          <div className='lista-de-tareas-eliminadas'>
            <h3>Tareas eliminadas</h3>
            {listaBorradas()}
          </div>
        </>
      }
    </>
  )
}

export default ListaDeTareas