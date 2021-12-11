import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getEpisodeDetail } from '../../redux/actions'
import "./EpisodeDetail.css";

export default function DeathDetail() {

    const dispatch = useDispatch()
    const episodeDetail = useSelector(state => state.episodeDetail)
    const {id} = useParams()
    
    useEffect(() => {
        dispatch(getEpisodeDetail(id))        
    console.log(episodeDetail)
    }, [dispatch, id])

    return (
        <div className='EpisodeDetail'>
            <h1>Episode Details</h1><br/>
            <div>
                <h2>{episodeDetail.title}</h2>
                <h4>Season: {episodeDetail.season}</h4>
                <h4>Episode: {episodeDetail.episode}</h4>  
                <h4>Air Date: {episodeDetail.air_date}</h4>  
                <h4>Characters: {episodeDetail.characters?.map(ch=>(
                <p>{ch}</p>))}</h4>  
            </div>
        </div>
    )
}