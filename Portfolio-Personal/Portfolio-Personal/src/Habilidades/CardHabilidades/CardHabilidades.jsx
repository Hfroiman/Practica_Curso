import React from 'react'
import './CardHabilidades.css'

const CardHabilidades = () => {
    return (
        <div className='groupcard'>
            <div className="cards" /*style="width: 18rem;"*/>
                <div className="card-body">
                    <h5 className="card-title">Habilidad</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}

export default CardHabilidades