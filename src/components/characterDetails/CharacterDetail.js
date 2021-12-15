import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CharacterCard from "../characterCard/CharacterCard";
import { getCharacterDetail, cleanDetail } from "../../redux/actions";
import "./CharacterDetail.css";
import '../Spinner'
import Spinner from "../Spinner";

function CharacterDetail() {
  /*
    PISTA: podemos obtener lo que llegue por parametros con el hook useParams.
    Que hace useParams? https://reactrouter.com/web/example/url-params
    */
   const detail = useSelector((state)=>state.characterDetail)
   const dispatch = useDispatch()
   const {id} = useParams()  //coincide con el id de la ruta en app

   useEffect(()=>{
     dispatch(getCharacterDetail(id)) 
     return ()=> {
      dispatch(cleanDetail())}     
   }, [dispatch]) 

  //  char_id":1,"name":"Walter White","birthday":"09-07-1958","occupation":["High School Chemistry Teacher","Meth King Pin"],"img":"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg","status":"Presumed dead","nickname":"Heisenberg","appearance":[1,2,3,4,5],"portrayed":"Bryan Cranston","category":"Breaking Bad","better_call_saul_appearance":[]


  return (
<>
{detail.length === 0 ? <Spinner /> :
    <div className="CharacterDetail">
      <h1>Character Details</h1> 
      {/* Método para mostrar en este mismo componente  */}
        {/* <h4>Name: {detail.name}</h4> 
        <h4>Birthday: {detail.birthday}</h4>  
        <h4>Occupation: {detail.occupation?.join(', ')}</h4>        
        <h4>Nickname: {detail.nickname}</h4>
        <h4>Status: {detail.status}</h4> */}
       
        {console.log(detail)}

      {/* Método para usar otro componenente CharacterCard*/}
      {detail.map((char)=>(
        <div key={char.char_id}>
          <CharacterCard
            name={char.name}
            birthday={char.birthday}
            nickname={char.nickname}
            status={char.status}
            occupation={char.occupation?.join(', ')}   
            category={char.category}
            portrayed={char.portrayed}
            appearance={char.appearance}   
            img={char.img}               
          />
        </div> ) 
      )}                        
      {/*Aqui crearemos una lista de detalles de cada personaje*/}

      {/* Usando el mismo componente */}
      {/* <img className="CharacterDetail__Photo" src={detail.img} alt="" />    */}
    </div>
}
    </>
  );
}

export default CharacterDetail;
