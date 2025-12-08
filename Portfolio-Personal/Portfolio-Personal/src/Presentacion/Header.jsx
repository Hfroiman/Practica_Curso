import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-sections'>
                <div>
                    <h3>Froiman Hernan</h3>
                </div>
                <div className='header-btnera'>
                    <a href="#Proyectos" className="btnera-btn">Proyectos</a>
                    <a href="#habilidades" className="btnera-btn">Habilidades</a>
                    <a href='#contact' className="btnera-btn"> Contacto </a>
                </div>
            </div>
        </div>
    )
}

export default Header