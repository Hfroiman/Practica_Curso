import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Home from './Home/Home.jsx'
import Presentation from './Update/Presentation.jsx'
import Pag404 from './Error/Pag404.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/id' element={<Presentation/>}/>
          <Route exact path='*' element={<Pag404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App