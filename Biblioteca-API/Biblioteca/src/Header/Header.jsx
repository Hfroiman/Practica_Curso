import './Header.css'

const Header = () => {
  return (
    <header className='header'>
      <section className='title'>
        <h2> API DE BIBLIOTECA </h2>
      </section>

      <section className='category'>
        <button className='button-category'>TODOS LOS LIBROS</button>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            GENEROS
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">LITERATURA</a></li>
            <li><a className="dropdown-item" href="#">CONSULTA Y REFERENCIA</a></li>
            <li><a className="dropdown-item" href="#">RELIGIOSOS</a></li>
            <li><a className="dropdown-item" href="#">AUTOAYUDA</a></li>
          </ul>
        </div>

                <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            ORDENAR
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">POR TITULO A-Z</a></li>
            <li><a className="dropdown-item" href="#">POR TITULO Z-A</a></li>
            <li><a className="dropdown-item" href="#">POR AUTOR A-Z</a></li>
            <li><a className="dropdown-item" href="#">POR AUTOR Z-A</a></li>
          </ul>
        </div>
      </section>
    </header>
  )
}

export default Header