import React,{useState} from 'react'

const Saludo = () => {

    const [num, setNum] = useState(1)
    const [nombre, setNombre] = useState("carlos")

    const cambiar = () => {
        setNum(45)
        setNombre("Julian")
    }

    return (
        <>
           <h1>saludo desde el componente react</h1>
           <p>Numero: {num}</p>
           <p>Nombre: {nombre}</p>
           <button onClick={cambiar}>Cambiar</button>
        </>
    )
}

export default Saludo
