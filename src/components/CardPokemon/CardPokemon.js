import {deletePokemon} from "../../CRUD/Crud"

import "./styles.css"

const CardPokemon = ({index,poke,setActualizarpokemones}) => {
    const handleClickEliminar=()=>{
        deletePokemon(index,setActualizarpokemones)
    }
    
  return (
    <div className="card-pokemon">
        <h2 className="card-pokemon-details">
            Nombre:<span className="card-pokemon-details-get">{poke.nombre}</span>
        </h2>
        <p className="card-pokemon-details">
            Habilidades: <span className="card-pokemon-details-get" >{poke.Habilidades}</span>
        </p>
        <p className="card-pokemon-details">
            Ciclo de Evolución: <span className="card-pokemon-details-get">{poke.Evolucion}</span>
        </p>
        <button className="btn-delete-card-pokemon" onClick={handleClickEliminar}>Eliminar</button>
    </div>
  )
}

export default CardPokemon