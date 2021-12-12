import { GET_CHARACTER_DETAIL, GET_CHARACTERS, GET_EPISODES, GET_RANDOM_QUOTE, GET_DEATHS, GET_DEATH_DETAIL, GET_EPISODE_DETAIL } from "../actions";


const initialState= {
    characters: [],
    characterDetail: [],
    episodes: [],
    episodeDetail: [],
    randomQuote: [],
    deaths: [],
    deathDetail: [],
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
                episodes: action.payload 
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
                deaths: [state.characters, ...action.payload]
            }
        case GET_DEATH_DETAIL:
            console.log(action.payload)
            return{
                ...state,
                deathDetail: action.payload
            }                     
        default:
            return {...state};
    }

}

export default rootReducer;