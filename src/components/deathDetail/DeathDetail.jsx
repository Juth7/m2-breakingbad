import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getDeathDetail, getDeaths } from '../../redux/actions'
import "./DeathDetail.css";
import { useParams } from 'react-router-dom'

export default function DeathDetail() {

    const dispatch = useDispatch()
    const deathDetail = useSelector(state => state.deathDetail)  
    // const {id} = useParams()
    console.log(deathDetail)

    // const filtro = deathDetail.filter(de=>
    //     de.death_id === id)
    
    useEffect(() => {
        dispatch(getDeaths(deathDetail))        
    console.log(deathDetail[0])
    }, [dispatch])

    return (
        <div className='DeathDetail'>
            <h1>Death Details</h1>
            <div className="DeathDetail">                
                <h2>{deathDetail.death}</h2>
                <h4>Cause: {deathDetail.cause}</h4>
                <h4>Responsible: {deathDetail.responsible}</h4>  
                <h4>Last Words: {deathDetail.last_words}</h4>  
            </div>
        </div>
    )
}

