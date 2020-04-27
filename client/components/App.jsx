import React from 'react'
import { Route } from 'react-router-dom'

import Form from './Form'
import ShowData from './ShowData'

const App = () => {
  return (
    <>
      <h1>React development has begun!</h1>
      <Route exact path='/' component={Form} />
      <Route exact path='/data' component={ShowData} />
    </>
  )
}

export default App
