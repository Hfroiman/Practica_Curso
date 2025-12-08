import Header from './Presentacion/Header'
import Body from './Presentacion/Body'
import Proyectos from './Proyectos/Proyectos.jsx'
import Habilidades from './Habilidades/Habilidades.jsx'
import Contacto from './Contacto/Contacto.jsx'
import Footer from './Footer/Footer.jsx'
import './app.css'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
      <Proyectos />
      <Habilidades />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App