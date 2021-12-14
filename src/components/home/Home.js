import React, { useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";
import {getRandomQuote} from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";

function Home() {
  /*
  PISTA: podemos usar el hook useEffect para llamar a la api. 
  Que haces useEffect? https://es.reactjs.org/docs/hooks-effect.html
  */
  const dispatch = useDispatch()
  const response = useSelector((state)=>state.randomQuote)  //state.Estadoinicialdereducers
  // const [phrase, setPhrase] = useState();  

  useEffect(()=> {  //AQUI ESTA EL USEEFFECT!!!  
    dispatch(getRandomQuote())  
  },[dispatch]) 

  const handleNewPhrase = (e) => {
    e.preventDefault()
    dispatch(getRandomQuote())
  }

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />

      <div><hr/>
       <h3>{response}</h3> <br /> {/*colocar {phrase} en el otro modo */}
       <button className='button' onClick={handleNewPhrase}>Phrase</button>
      </div>
        
    </div>
  );
}

export default Home;

// useEffect(()=> {  //AQUI ESTA EL USEEFFECT!!!
//   frase()
// },[!response.length]) 

// const frase = ()=>{
//  dispatch(getRandomQuote());
//  setPhrase(response)
// }