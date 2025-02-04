import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodes, cleanEpisodes, filterEpisodes } from "../../redux/actions";
import "./Episodes.css";
import { Link } from "react-router-dom";
import Spinner from '../Spinner'

function Episodes() {

  let episodes = useSelector(state => state.episodesFilter)
  const dispatch = useDispatch();
  const [input, setInput] = useState('');  
  const [loading, setLoading] = useState(false);
  
  
    const handleSubmit = (e)=> {
    e.preventDefault();
    !input && alert("Este campo no puede quedar vacío.")
    dispatch(filterEpisodes(input))     
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
    dispatch(getEpisodes())    
    return () => {
      dispatch(cleanEpisodes())
    }
  }, [])

  if(episodes.length === 62){
    episodes = []
  }
  
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
            {episodes?.map((epi)=> (                    
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
