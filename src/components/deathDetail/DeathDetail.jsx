import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDeathDetail } from '../../redux/actions'
import "./DeathDetail.css";
import { useParams } from 'react-router-dom'

export default function DeathDetail() {

    const dispatch = useDispatch()
    const deathDetail = useSelector(state => state.deathDetail)  
    let {name} = useParams()
    console.log(deathDetail)
        
    useEffect(() => {
        dispatch(getDeathDetail(name))        
    console.log(name)
    }, [dispatch])

    return (
        <div className='DeathDetail'>
            <h1>Death Details</h1>
            <div className="DeathDetail"> 
            <h2>{deathDetail.death}</h2>
            {console.log(deathDetail)}            
                {deathDetail.map(de=> 
                console.log(de)
                (de.death === name) && 
                    
                    <div key={de.death_id}>
                        <h2>{de.death}</h2>
                        <h4>Cause: {de.cause}</h4>
                        <h4>Responsible: {de.responsible}</h4>  
                        <h4>Last Words: {de.last_words}</h4> 
                    </div>
               
                )}   
            </div>
        </div>
    )
}

