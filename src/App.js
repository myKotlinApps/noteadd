import React,{useState,useEffect,useReducer} from 'react';
import './App.css';
import Count from './components/count/count.component';
import Indecesionapp from './components/indecisionapp/indecesionapp.component';
import Notes from './components/notes/notes.component';


function App(props) {
  


  return (
    <div className='App'>
      <Indecesionapp />
      {/* <hr></hr>
      <Count/>
      <hr></hr>
      <Notes /> */}
      
     
    </div>
 
  );
}


export default App;
