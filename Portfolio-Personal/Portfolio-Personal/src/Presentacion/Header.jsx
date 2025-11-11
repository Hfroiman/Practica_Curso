import React from 'react'
import './header.css';



const Header = () => {
    return (
        <div className='header'>
            <div className='header2'>
                <div>
                    <h3>Froiman Hernan</h3>
                </div>
                <div className='header-btnera'>
                    <a href="#" className="mi-clase">contacto</a>
                    <a href="#" className="mi-clase">habilidades</a>
                    <a href="#" className="mi-clase">Proyectos</a>
                    <a href="#" className="mi-clase">Presentacion</a>
                </div>
            </div>
        </div>
    )
}

export default Header