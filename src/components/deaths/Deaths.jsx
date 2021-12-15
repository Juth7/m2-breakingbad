import React, { useEffect } from 'react';
import { cleanDeaths, getDeaths } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import "./Deaths.css";
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

export default function Deaths() {
    const dispatch = useDispatch()
    const deaths = useSelector(state => state.deaths)

    useEffect(() => {
        dispatch(getDeaths())  
        return () => {
          dispatch(cleanDeaths())
      }      
    }, [dispatch])
    
    return (
      <>{deaths.length === 0 ? <Spinner/> :
          <div className="Deaths">
            <h1>Deaths</h1><br/>                   
              {deaths?.map((d, index)=> (  
                <div key={index}>                              
                  <Link to={`/deaths/${d.death}`}>                
                    {d.death} <br />                
                  </Link>
                </div> 
              ))          
              }        
        </div>}
      </>
    )
}


// {"death_id":40,"death":"Bodyguards of Gus Fring","cause":"Multiple gunshots.","responsible":"Walter White","last_words":"What, you got a problem with stairs?","season":4,"episode":13,"number_of_deaths":2}
