import React,{useContext} from 'react'
import './burger.css'
import {BurgerContext} from '../context/BurgerContext';
const ShowBurgerContents = ()=>{
  const {burgerContents} = useContext(BurgerContext);
  return(
      
    <div className='burger-container'>
      <div className='burger-top'>
      </div>
      {
        burgerContents ? 
        burgerContents.length < 1 ? 
        <h3>Add Ingredients here</h3> : "" : ""
      }
      <div className='burger-ingredient'>
        {
          burgerContents?.map((ingredients,index)=>(
          <div key={index} className={`${ingredients}`}>
          </div>
          ))
        }
      </div>
      <div className='burger-bottom'>
      </div>
    </div>
  );
   
 }
 export{ShowBurgerContents}