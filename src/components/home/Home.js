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
  const response = useSelector((state)=>state.randomQuote)  //state.Estadoinicialdereducers
  // const [phrase, setPhrase] = useState();  
  const dispatch = useDispatch()

  useEffect(()=> {  //AQUI ESTA EL USEEFFECT!!!  
    dispatch(getRandomQuote(response))  
  },[dispatch]) 


// useEffect(()=> {  //AQUI ESTA EL USEEFFECT!!!
//   frase()
// },[!response.length]) 

// const frase = ()=>{
//  dispatch(getRandomQuote());
//  setPhrase(response)
// }
 
  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />

      <div><hr/>
       <h3>{response}</h3> {/*colocar {phrase} en el otro modo */}
      </div>
        
    </div>
  );
}

export default Home;