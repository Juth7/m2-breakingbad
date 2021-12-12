import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDeathDetail } from '../../redux/actions'
import "./DeathDetail.css";
import { useParams } from 'react-router-dom'

export default function DeathDetail() {

    const dispatch = useDispatch()
    const deathDetail = useSelector(state => state.deathDetail)  
    const { name } = useParams()
    console.log(deathDetail)
        
    useEffect(() => {
      dispatch(getDeathDetail(name));
    }, [dispatch]);
    
    return (
        <div className='DeathDetail'>
            <h1>Death Details</h1>
                <h2>{deathDetail[0]?.death}</h2> {/* Se usa ? para que cuando tenga la data la muestre(es asíncrono) */}
                <h4>Cause: {deathDetail[0]?.cause}</h4>
                <h4>Responsible: {deathDetail[0]?.responsible}</h4>  
                <h4>Last Words: {deathDetail[0]?.last_words}</h4>               
        </div>
    )
}

