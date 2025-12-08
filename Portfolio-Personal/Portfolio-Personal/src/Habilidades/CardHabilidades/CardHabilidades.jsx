import React from 'react'
import './CardHabilidades.css'

const CardHabilidades = () => {
    return (
        <div className='groupcard'>
            <div className="card">
                <div className="card-body2">
                    <div className='card-body-logo'>
                        <img src='../public/frontend.png' alt='database' className='img-card'></img>
                        <h5 className="card-title">Frontend</h5>
                    </div>
                    <div className='card-body-list'>
                        <p>React js</p>
                        <p>Vite</p>
                        <p>Bootstrap</p>
                        <p>HTML5</p>
                        <p>CSS</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body2">
                    <div className='card-body-logo'>
                        <img src='../public/prog.png' alt='database' className='img-card'></img>
                        <h5 className="card-title">Backend</h5>
                    </div>
                    <div className='card-body-list'>
                        <p>C#</p>
                        <p>Node.js</p>
                        <p>JavaScript</p>
                        <p>.Net</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body2">
                    <div className='card-body-logo'>
                        <img src='../public/db.png' alt='database' className='img-card'></img>
                        <h5 className="card-title">Base de Datos</h5>
                    </div>
                    <div className='card-body-list'>
                        <p>SQL server</p>
                        <p>MySQL</p>
                        <p>Firebase</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body2">
                    <div className='card-body-logo'>
                        <img src='../public/herramientas.png' alt='database' className='img-card'></img>
                        <h5 className="card-title">Herramientas</h5>
                    </div>
                    <div className='card-body-list'>
                        <p>Github</p>
                        <p>Vercel</p>
                        <p>Postman</p>
                        <p>Excel</p>
                        <p>Word</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardHabilidades