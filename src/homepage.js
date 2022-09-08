import { useState } from 'react'

import { Header, Footer, ShowBurgerContents } from './components/components'
import { BurgerContext } from './context/BurgerContext'

import { Provider } from 'react-redux'

function Homepage() {
  const [burgerContents, setBurgerContents] = useState()
  return (
    <Provider>
      <Header />
      <BurgerContext.Provider value={{ burgerContents, setBurgerContents }}>
        <ShowBurgerContents />
        <Footer />
      </BurgerContext.Provider>
    </Provider>
  )
}
export default Homepage
