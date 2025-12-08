import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div id='contact'>
        <h2>Gracias por haber visitado mi portafolio</h2>
        <p>Si crees que mi perfil puede encajar en tu equipo, estaré encantado de conversar.</p>
        <section className='media'>
            <a>Email</a>
            <a>VerCV</a>
            <a>Linkedln</a>
            <a>GitHub</a>
        </section>
    </div>
  )
}

export default Contacto