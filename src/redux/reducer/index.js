import { GET_CHARACTER_DETAIL, GET_CHARACTERS, GET_EPISODES, GET_RANDOM_QUOTE, GET_DEATHS } from "../actions";


const initialState= {
    characters: [],
    characterDetail: [],
    episodes:[],
    randomQuote: [],
    deaths: [],
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
                deaths: action.payload
            }                   
        default:
            return {...state};
    }

}

export default rootReducer;