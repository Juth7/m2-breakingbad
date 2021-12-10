import React, { useEffect } from 'react'
import { getDeaths } from '../../redux/actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import "./Deaths.css";

export default function Deaths() {
    const dispatch = useDispatch()
    const deaths = useSelector(state => state.deaths)

    useEffect(() => {
        dispatch(getDeaths(deaths))
    }, [])

    return (
        <div className="Episodes">
          <h1>Deaths</h1><br/>                   
            {deaths.map((d)=> (            
              <div key={d.death_id}>                              
                <h4>Death: {d.death}</h4>
                <h4>Cause: {d.cause}</h4>
                <h4>Responsible: {d.responsible}</h4>   
                <hr/>
                <br/> 
              </div>
            ))          
            }        
      </div>
    )
}
