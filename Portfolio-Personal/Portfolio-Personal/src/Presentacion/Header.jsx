import React from 'react'
import './header.css';



const Header = () => {
    return (
        <div className='header'>
            <div className='header-sections'>
                <div>
                    <h3>Froiman Hernan</h3>
                </div>
                <div className='header-btnera'>
                    <a href="#" className="btnera-btn">contacto</a>
                    <a href="#" className="btnera-btn">habilidades</a>
                    <a href="#" className="btnera-btn">Presentacion</a>
                    <a href="#" className="btnera-btn">Proyectos</a>
                </div>
            </div>
        </div>
    )
}

export default Header