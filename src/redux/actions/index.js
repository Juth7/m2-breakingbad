import axios from "axios";
export const GET_CHARACTER_DETAIL = 'GET_CHARACTER_DETAIL';
export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_EPISODES = 'GET_EPISODES';
export const GET_RANDOM_QUOTE = 'GET_RANDOM_QUOTE';
export const GET_DEATHS = 'GET_DEATHS';
export const GET_EPISODE_DETAIL = 'GET_EPISODE_DETAIL';
export const GET_DEATH_DETAIL = 'GET_DEATH_DETAIL';

export const getCharacters = (query)=>(dispatch) => {
    return fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            dispatch ({type: GET_CHARACTERS, payload: data})
        })
};

export const getCharacterDetail = (id)=> dispatch => {
    return axios(`https://www.breakingbadapi.com/api/characters/${id}`)    
        .then(json=> {console.log(json.data) 
            dispatch({type:GET_CHARACTER_DETAIL, payload:json.data})  //Si quiero mostrar details en CharacterDetail sin crear CharacterCard, colocar payload:json.data[0]
        })
}

export const getEpisodes = ()=> dispatch=> {
    return fetch(`https://www.breakingbadapi.com/api/episodes?series=Breaking+Bad`)
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            dispatch ({type: GET_EPISODES, payload: data})
        })
};

export const getEpisodeDetail = (id)=> dispatch=> {
    return axios(`https://www.breakingbadapi.com/api/episodes/${id}`)              
        .then(json=> dispatch({type: GET_EPISODE_DETAIL, payload: json.data[0]}) 
)}

export const getRandomQuote = ()=> dispatch=> {
    return axios('https://www.breakingbadapi.com/api/quote/random')              
        .then(json=> dispatch({type:GET_RANDOM_QUOTE, payload: json.data[0].quote}) //payload --info que le envío al reducer a guardar
)}

export const getDeaths = ()=> dispatch=> {
    return axios('https://www.breakingbadapi.com/api/deaths')              
        .then(json=> dispatch({type: GET_DEATHS, payload: json.data}) 
)}

export const getDeathDetail = ()=> dispatch=> {
    return axios(`https://www.breakingbadapi.com/api/deaths`)              
        .then(json=> {console.log(json.data);
            dispatch({type: GET_DEATH_DETAIL, payload: json.data})} 
)}


