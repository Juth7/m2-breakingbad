import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { getCharacters } from "../../redux/actions";
import Spinner from "../Spinner";
import "./Characters.css";

function Characters() {
  /*
    PISTA:
    La dirección de donde vamos a tomar los datos es
    
    https://www.breakingbadapi.com/api/characters?name=

    Notesé que hay una query en la dirección. Lo que seguirá a esa query será un string 
    con un nombre o un apellido, y en base a eso la api realizará el filtrado.
    En caso de no poner nada en la query, la api traerá a todos los personajes.
  */
  const [query, setQuery]= useState(''); //query=valor estado, setQuery= funct para cambiar estado
  const [isLoading, setLoading]= useState(false);
  const dispatch= useDispatch();  
  const characters = useSelector((state)=>state.characters)
  
  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(getCharacters(query))
    console.log(query)
    setQuery('')    
    setLoading(true)
    console.log(characters)
  }
  
  const handlechange = e=> {
    setQuery(e.target.value)
  } 

  useEffect(()=>{
     setTimeout(() => {
      setLoading(false)
     }, 250);  
  },)

    return (
    <div className="Characters">
      <h1>List of Characters</h1> <br/>
      
      <form onSubmit={handleSubmit}>                
        <input type="search" placeholder="Search characters" onChange={handlechange} value={query}/>
      </form>     
    
      <ul className="Characters__list">
        {/*El loading le va a dar un efecto de carga hasta que la peticion de la API llegue, no tocar!.*/}
       {isLoading ? (
       <Spinner />
       ) : (
       characters?.map((c)=>          
            <li key={c.char_id}> 
            <Link to= {`/characters/${c.char_id}`}> 
            {c.name}
            </Link> 
            </li>)               
       )}
      </ul>
    </div>
  );
}

export default Characters;

