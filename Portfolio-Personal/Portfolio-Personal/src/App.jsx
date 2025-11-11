import React from 'react'
import Header from './Presentacion/Header'
import Body from './Presentacion/Body'
import Proyectos from './Proyectos/Proyectos.jsx'
import Habilidades from './Habilidades/Habilidades.jsx'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
      <Proyectos></Proyectos>
      <Habilidades></Habilidades>
    </div>
  )
}

export default App