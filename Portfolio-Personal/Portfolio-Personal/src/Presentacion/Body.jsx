import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <div className='body'>
      <div className='body2'>
        <section>
          <div><h1 className='titulo'>WEB DEVELOPER</h1></div>
        </section>
        <section className='body-text'>
          <p>Soy desarrollador web con formación en ingeniería biomédica y experiencia previa en docencia. Mis herramientas de confianza son React para el frontend y Django para el backend, y disfruto el diseño y arquitectura de proyectos. Me inspira el aprendizaje continuo y la oportunidad de contribuir en proyectos con impacto real.</p>
        </section>
        <section className='body-btnera'>
          <button className='body-btn1'>Ver proyectos</button>
          <button className='body-btn2'>Contactar</button>
        </section>
      </div>
    </div>
  )
}

export default Body