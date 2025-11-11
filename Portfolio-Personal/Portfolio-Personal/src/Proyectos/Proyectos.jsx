import React from 'react'
import './Proyectos.css'
import Cards from './Cards/Cards'

const Proyectos = () => {
  return (
    <div className='Proyectos'>
      <div className='Proyectos-main'>
        <section className='section-titulo'>
          <h2>PREYECTS PAPAA</h2>
        </section>
        <section className='section-text'>
          <a>Aca hablo un poco bastantes de mis proyects favs, aunque no sean muchos ni esten tan sarpados, a mi mg y me costaron realizarlos-.</a>
        </section>
        <section className='section-group-cars'>
          <Cards></Cards>
        </section>
      </div>
    </div>
  )
}

export default Proyectos