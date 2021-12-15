import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes, cleanEpisodes } from "../../redux/actions";
import "./Episodes.css";
import { Link } from "react-router-dom";
import Spinner from '../Spinner'

function Episodes() {

  const episodes = useSelector(state => state.episodes)
  const dispatch = useDispatch();
  const [input, setInput] = useState('');  
  const [loading, setLoading] = useState(false);

  const filtro = episodes.filter((epi) =>          
  epi.title.toLowerCase().includes(input.toLowerCase()) ||
  epi.episode === input
) 
  
    const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(getEpisodes())     
    setInput('')
    setLoading(true)
  }
  
  const handlechange = e=> {
    setInput(e.target.value)
  } 

  setTimeout(() => {
    setLoading(false)
  }, 250);

  useEffect(() => {    
    return () => {
      dispatch(cleanEpisodes())
    }
  }, [])
  
  return (
    
    <div className="Episodes">
      {loading ? <Spinner /> : 
        <div>
          <h1>Episodes List</h1> 

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
      }
    </div>
  );
}

export default Episodes;
