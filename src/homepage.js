import React,{ useState } from 'react';
import { Footer } from './Footer/footer';
import { Header } from './Header/header';
import {BurgerContext} from './context/BurgerContext';
import {ShowBurgerContents} from './Burger/burger';

function Homepage() {
  const [burgerContents,setBurgerContents] = useState();
  return (
    <div>
      <Header/>
      <BurgerContext.Provider value={{burgerContents,setBurgerContents}}>
      <ShowBurgerContents/>
      <Footer/>
      </BurgerContext.Provider>
    </div>
  );
}
export {Homepage}