import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Characters from './components/characters/Characters';
import CharacterDetail from './components/characterDetails/CharacterDetail';
import Episodes from './components/episodes/Episodes';
import Deaths from "./components/deaths/Deaths.jsx";


function App() {
  return (
    <div>
    {/* Aca vamos a crear nuestras rutas */}
      <NavBar />
      <Route exact path='/'component={Home}/>
      <Route exact path='/characters'component={Characters}/> 
      <Route exact path='/characters/:id'component={CharacterDetail}/>
      <Route exact path='/episodes'component={Episodes}/>
      <Route exact path='/deaths' component={Deaths}/>
    </div>
  );
}
export default App;
