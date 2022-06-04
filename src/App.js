import { useState, useEffect } from 'react';
import './App.css';
import {getPokemon} from "./CRUD/Crud"
import CardPokemon from './components/CardPokemon/CardPokemon';
import Form from './components/Form/Form';
function App() {
  const [buscar,setBuscar] = useState(false)
  const [agregar,setAgregar] = useState(false)
  const [arraypokemons, setArrayPokemons] =useState([])
  const [filtro, setFiltro] = useState("");
  const [actualizarpokemones,setActualizarpokemones] = useState("")
  const handleClickBuscar=()=>{
    setBuscar(true)
    setActualizarpokemones("activado")
  }
  const handleClickAgregar=()=>{
    setAgregar(true)
    setBuscar(false)
  }
  useEffect(()=>{
    if (actualizarpokemones === "activado") {
      getPokemon(setArrayPokemons, filtro)
      console.log(arraypokemons)
      setActualizarpokemones("desactivado")
    }
  },[actualizarpokemones, arraypokemons,filtro])
  return (
    <div className="App">
      <div className='app-header'>
          <h1 className='app-header-title'>Pokedex</h1>
          <div className='app-header-btns-containers'>
            <input 
              value={filtro} 
              onChange={(e)=>{setFiltro(e.target.value.toLowerCase())}} className="app-header-search" 
              type="text" 
              placeholder='Buscar pokemon' 
            />
            <input className="app-header-btn-search" onClick={handleClickBuscar} type="submit" value="Buscar" />
            <input className="app-header-btn-add" onClick={handleClickAgregar} type="submit" value="Agregar" />
          </div>
      </div>
      <div className='app-content'>
        {
          buscar?(
            arraypokemons.map((poke)=>(
              <div className='app-content-container' key={poke.id}>
                <CardPokemon
                  index={poke.id}
                  poke={poke}
                  setActualizarpokemones={setActualizarpokemones}
                />
              </div>
            ))
            
          ):(
            agregar?(
              <Form
                setAgregar={setAgregar} 
              />
            ):(
                <span>Sin Resultados</span>
            )
          )
        }
            
      </div>
    </div>
  );
}

export default App;
