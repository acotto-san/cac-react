import React, { useState , useEffect} from 'react'
import ListaDeTareas from './ListaDeTareas'

const ToDoList = () => {
    const tareaEnBlanco = {
        id : "",
        nombre : "",
        activa : true,
        borrada : false
    }

    const [listaDeTareas, setListaDeTareas] = useState([])
    const [tareaBorrador, settareaBorrador] = useState(tareaEnBlanco)


    
    const handleChange = (e) => {
        const { name, value } = e.target
        settareaBorrador({
            ...tareaBorrador,
            [name]:value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setListaDeTareas((prev) => [...prev, {...tareaBorrador,
            id: new Date().valueOf(),
            }])
        settareaBorrador(tareaEnBlanco)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input required type="text" onChange={handleChange} name="nombre" value={tareaBorrador.nombre}/>
                <button type='submit'>Agregar</button>
            </form>
            <ListaDeTareas listaDeTareas={listaDeTareas}/>

        </>
    )
}

export default ToDoList