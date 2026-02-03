import './card.css'

const card = () => {
    return (
        <div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}

export default card