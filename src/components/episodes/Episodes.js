import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getEpisodes } from "../../redux/actions";
import { useState } from "react";
import "./Episodes.css";
import { Link } from "react-router-dom";

function Episodes() {

  const episodes = useSelector(state => state.episodes)
  const dispatch = useDispatch();
  const [input, setInput] = useState('');  

  const filtro = episodes.filter((epi) =>          
  epi.title.toLowerCase().includes(input.toLowerCase()) ||
  epi.episode === input
) 
  
    const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(getEpisodes(filtro))     
    setInput('')
  }
  
  const handlechange = e=> {
    setInput(e.target.value)
  } 
  
  return (
    <div className="Episodes">
      <h1>Episodes List</h1> <br/>

        <form onSubmit={handleSubmit}>                
          <input type="search" placeholder="Search episode" onChange={handlechange} value={input}/>
        </form> 

      <ul className="Episodes__list">
        {/*Aca vamos a mostrar la lista de episodios de "Breaking Bad"*/}        
        {filtro?.map((epi)=> (                    
          // e.series ==="Breaking Bad" &&         
          <div key={epi.episode_id}>
            <Link to ={`/episodes/${epi.episode_id}`}>                 
              {epi.title}  
            </Link>     
          </div>
          ))         
        }
      </ul>
    </div>
  );
}

export default Episodes;
