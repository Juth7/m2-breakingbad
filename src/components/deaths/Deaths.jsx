import React, { useEffect } from 'react'
import { getDeaths } from '../../redux/actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import "./Deaths.css";
import { Link } from 'react-router-dom';

export default function Deaths() {
    const dispatch = useDispatch()
    const deaths = useSelector(state => state.deaths)

    useEffect(() => {
        dispatch(getDeaths(deaths))
        console.log(deaths)
    }, [dispatch])

    return (
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
      </div>
    )
}


// {"death_id":40,"death":"Bodyguards of Gus Fring","cause":"Multiple gunshots.","responsible":"Walter White","last_words":"What, you got a problem with stairs?","season":4,"episode":13,"number_of_deaths":2}
