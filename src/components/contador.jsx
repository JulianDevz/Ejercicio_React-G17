import React,{useState} from 'react'
import '../assets/css/style.css'
import logosergio from '../assets/img/logosergio.png'

const Contador = () => {

    const [contador, setContador] = useState(0)
    const aumentar=()=>{
        setContador(contador+1)
    }
    const decrementar=()=>{
        setContador(contador-1)
    }

    return (
        <div className="contenedor">
            <h1>Contador Sergio Arboleda React</h1>
            <img src={logosergio} alt="LogoSergio" />
            <p>Contador = {contador}</p>
            <button className="btn botonAumen" onClick={aumentar}>Aumentar</button>
            <button className="btn botonDecre" onClick={decrementar}>Decrementar</button>
            
        </div>
    )
}

export default Contador
