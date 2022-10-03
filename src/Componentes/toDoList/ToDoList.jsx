import React, { useState , useEffect} from 'react'
import ListaDeTareas from './ListaDeTareas'

const ToDoList = () => {

    const [inputDelUsr, setInputDelUsr] = useState("")
    const [listaDeTareas, setListaDeTareas] = useState([])

    const handleChange = (e) => {
        const { value } = e.target
        setInputDelUsr(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setListaDeTareas((prev) => [...prev, {
            id : prev.length,
            nombre : inputDelUsr,
            descripcion : "",
            activa : true,
            borrada : false
            }])
    }

    const imprimirLista = () => {
        console.log(listaDeTareas)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} />
                <button type='submit'>Enviar</button>
            </form>
            <button onClick={imprimirLista}>Consultar lista</button>
            <ListaDeTareas listaDeTareas={listaDeTareas}/>

        </>
    )
}

export default ToDoList