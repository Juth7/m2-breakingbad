import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getEpisodes } from "../../redux/actions";
import "./Episodes.css";

function Episodes() {

  const episodes = useSelector(state => state.episodes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEpisodes(episodes))
    console.log()
  },[])

  return (
    <div className="Episodes">
      <h1>Episodes List</h1>
      <ul className="Episodes__list">
        {/*Aca vamos a mostrar la lista de episodios de "Breaking Bad"*/}
        {episodes.map((e)=> {
          console.log(e.title);
          (episodes.series==="Breaking Bad") &&
          <li key={e.episode_id}>         
            {e.title}        
          </li>
          })          
        }
      </ul>
    </div>
  );
}

export default Episodes;
