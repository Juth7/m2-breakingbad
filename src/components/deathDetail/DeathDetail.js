import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDeathDetail, cleanCharacters } from '../../redux/actions'
import "./DeathDetail.css";
import { useParams } from 'react-router-dom'

export default function DeathDetail() {

    const dispatch = useDispatch()
    const deathDetail = useSelector(state => state.deathDetail)  
    let { name } = useParams()    
    
    useEffect(() => {
      dispatch(getDeathDetail(name));
    }, [dispatch]);
    
    return (
        <div className='DeathDetail'>
            <h1>Death Details</h1> <br />
            {deathDetail[0] ? (   
                <>
                <h2>{deathDetail[0]?.death}</h2> 
                <h4>Cause: {deathDetail[0]?.cause}</h4>
                <h4>Responsible: {deathDetail[0]?.responsible}</h4>  
                <h4>Last Words: {deathDetail[0]?.last_words}</h4>
                </>
            )
            : <h2>Information not available</h2> 
            }
                               
        </div>
    )
}

