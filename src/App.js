import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

import routeElement from './router'

function App () {
  return (
    <Router>
      <Routes>
        {routeElement}
      </Routes>
    </Router>
  )
}
export default App
