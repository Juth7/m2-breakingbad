import React from 'react'

function CharacterCard(props) {

    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Birthday: {props.birthday}</p>
            <p>Occupation: {props.occupation}</p>
            <p>Nickname: {props.nickname}</p> 
            <p>Status:{props.status}</p>           
            <img src={props.img} className="CharacterDetail__Photo" alt=""/>
        </div>
    )
}

export default CharacterCard

// char_id":1,"name":"Walter White","birthday":"09-07-1958","occupation":["High School Chemistry Teacher","Meth King Pin"],"img":"https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg","status":"Presumed dead","nickname":"Heisenberg","appearance":[1,2,3,4,5],"portrayed":"Bryan Cranston","category":"Breaking Bad","better_call_saul_appearance":[]
