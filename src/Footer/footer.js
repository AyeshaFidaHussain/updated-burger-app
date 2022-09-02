import React, { useState , useEffect,useContext } from 'react'
import './footer.css'
import { Button } from '../Button/button';
import { BurgerContext } from '../context/BurgerContext';
import {Grid} from '@mui/material';

function Footer() {
 
  const [price,setPrice] = useState(3);
  const {setBurgerContents} = useContext(BurgerContext);
  const[ingredientInfo, setIngredientsInfo] = useState({
   Lettuce: { price: 0.5,  quantity:0 },
   Bacon:   { price: 5.0,  quantity:0 },
   Cheese:  { price: 3.0,  quantity:0 },
   Meat:    { price: 8.0,  quantity:0 }
  });

    const BurgerContents = ()=>{
    const burger_contents = [];
    const mykeys = Object.keys(ingredientInfo);
   
    for(let i = 0; i<mykeys.length;i++)
    {
      if(ingredientInfo[mykeys[i]].quantity>0)
      {
        for(let x = ingredientInfo[mykeys[i]].quantity; x>0;x--)
        {
          burger_contents.push(mykeys[i]);
        }   
      }  
    }
    setBurgerContents(burger_contents);
  }

  useEffect(() => {
    BurgerContents();
    // eslint-disable-next-line
  }, [price]);

  const OnClickHandler =(ingredient,buttonVal,index)=>{

      const rate = ingredient.price;
      let ing_key = Object.keys(ingredientInfo)[index];
      if(buttonVal==="less")
      {
          setPrice(price-rate);
          setIngredientsInfo({...ingredientInfo,[ing_key]:{...ingredientInfo[ing_key],quantity:ingredientInfo[ing_key].quantity-1}});
      }
      else
      {
          setPrice(price+rate);
          setIngredientsInfo({...ingredientInfo,[ing_key]:{...ingredientInfo[ing_key],quantity:ingredientInfo[ing_key].quantity+1}}); 
      } 
}
  return (
    <div className=' my-footer'>
      <h2>Current price : <strong>${price}</strong></h2>
      <>
        {
          Object.values(ingredientInfo).map((ingredient, index) => (
            <Grid container className='ingredient-container'>
               <Grid>
                  <h3>{Object.keys(ingredientInfo)[index]}</h3>
                </Grid> 
                <Grid>
                  <Button buttonVal="Less" className="less" clickHandler={() => { OnClickHandler(ingredient,"less", index)}} disabledCondition={true && ingredient.quantity===0}/>
                </Grid>
                <Grid>
                  <Button buttonVal="More" className="more" clickHandler={() => { OnClickHandler(ingredient,"more", index)}} disabledCondition={false}/>
                </Grid>
            </Grid>
            ))
        }
       </>
      <Button className="sign-up"  buttonVal="SIGN UP FOR ORDER"  disabledCondition={price>3?false:true}/>
    </div>
    
  )
}
export { Footer }
