import React, { useEffect } from "react";
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
  const [filter, setFilter] = useState([]);
  
    const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(getEpisodes(episodes))
    console.log(episodes)  
    setFilter(
      episodes.filter((epi) =>          
        epi.title.toLowerCase().includes(input.toLowerCase()) ||
        epi.episode === input
      )
      
    );  
    setInput('')
  }
  
  const handlechange = e=> {
    setInput(e.target.value)
  } 

  // useEffect(() => {
  //   dispatch(getEpisodes())    
  // }, [])

  return (
    <div className="Episodes">
      <h1>Episodes List</h1> <br/>

        <form onSubmit={handleSubmit}>                
          <input type="search" placeholder="Search episode" onChange={handlechange} value={input}/>
        </form> 

      <ul className="Episodes__list">
        {/*Aca vamos a mostrar la lista de episodios de "Breaking Bad"*/}        
        {filter?.map((ep)=> (                    
          // e.series ==="Breaking Bad" &&
          console.log(ep.episode_id),
          <div key={ep.episode_id}>
            <Link to ={`/episodes/${ep.episode_id}`}>                 
              {ep.title}  
            </Link>     
          </div> 
        ))          
        }
      </ul>
    </div>
  );
}

export default Episodes;
