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
    }, [])

    return (
        <div className="Deaths">
          <h1>Deaths</h1><br/>                   
            {deaths?.map((d)=> (  
              console.log(d),          
              <div key={d.death_id}>                              
                {/* <Link to={`/deaths/${d.death_id}`}> */}
                <ul>
                  {d.death} <br />
                  {/* Cause: {d.cause} <br />
                  Responsible: {d.responsible} <br />
                  Last Words: {d.last_words}  */}
                </ul> 
                {/* </Link> */}
              </div> 
            ))          
            }        
      </div>
    )
}


// {"death_id":40,"death":"Bodyguards of Gus Fring","cause":"Multiple gunshots.","responsible":"Walter White","last_words":"What, you got a problem with stairs?","season":4,"episode":13,"number_of_deaths":2}
