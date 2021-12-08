import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import "./Home.css";
import {getRandomQuote} from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux";

function Home() {
  /*
  PISTA: podemos usar el hook useEffect para llamar a la api. 
  Que haces useEffect? https://es.reactjs.org/docs/hooks-effect.html
  */
  const response = useSelector((state)=>state.randomQuote)  
  const [phrase, setPhrase] = useState();  
  const dispatch = useDispatch()

  const frase = ()=>{
    dispatch(getRandomQuote());
    setPhrase(response)
  }
 
  useEffect(()=> {  //AQUI ESTA EL USEEFFECT!!!
    frase()
  },[!response.length])   
  
  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />

      <div><hr/>
      <h3>{phrase}</h3>
      </div>
        
    </div>
  );
}

export default Home;

// const response = useSelector((state)=>state.randomQuote)  //state.Estadoinicialdereducers
  
//   const [phrase, setPhrase] = useState();  
//   const dispatch = useDispatch()
 
// useEffect(()=> {  //AQUI ESTA EL USEEFFECT!!!  
//   dispatch(getRandomQuote())  
//  },[dispatch, !response]) 
 
//   return (
//     <div className="Home">
//       <img src={logo} alt="" className="Home__logo" />

//       <div>
//       <h3>{response}</h3>
//       </div>
//     </div>
//   )