import { GET_CHARACTER_DETAIL, GET_CHARACTERS, GET_EPISODES, GET_RANDOM_QUOTE, GET_DEATHS, GET_DEATH_DETAIL, GET_EPISODE_DETAIL, FILTER_EPISODES } from "../actions";


const initialState= {
    characters: [],
    characterDetail: [],
    episodes: [],
    episodeDetail: [],
    randomQuote: [],
    deaths: [],
    deathDetail: [],
    episodesFilter: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS: 
        console.log(state.characters)           
            return{
                ...state,
                characters: [state.characters, ...action.payload]
            }
        case GET_CHARACTER_DETAIL:
            console.log(state.characterDetail)
            return{
                ...state,
                characterDetail: action.payload
            }   
        case GET_EPISODES:  
        console.log('payload' ,action.payload)          
            return{
                ...state,
                episodes: action.payload,
                episodesFilter: action.payload 
            }
        case GET_EPISODE_DETAIL:
            console.log(state.characterDetail)
            return{
                ...state,
                episodeDetail: action.payload 
            }   
        case GET_RANDOM_QUOTE:
            console.log(action.payload)
            return{
                ...state,
                randomQuote: action.payload
            }
        case GET_DEATHS:
            console.log(action.payload)
            return{
                ...state,
                deaths: [state.deaths, ...action.payload]
            }
        case GET_DEATH_DETAIL:
            console.log(action.payload)
            return{
                ...state,
                deathDetail: action.payload
            } 
        case FILTER_EPISODES:
            const filtro = state.episodes.filter(e=>(              
                e.title.toLowerCase().includes(action.payload.toLowerCase()) ||
                (e.episode === action.payload || e.episode_id === action.payload)))
            return{
                    ...state,
                    episodesFilter: filtro,             
            }                        
        default:
            return {...state};
    }

}

export default rootReducer;