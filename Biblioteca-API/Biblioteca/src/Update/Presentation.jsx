import './Presentation.css'

const Presentation = () => {
  return (
    <div className='pr'>
      <div className='presentation'>
        <section className='section-image'>
          <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKYX853x68R0T5-dXN3SC9c-uHH9OcMjw0mQ&s' className='section-image-front'></img>
        </section>

        <section className='section-detail'>
          <h2>TITLE </h2>
          <h4>autor</h4>
          <h6>genero</h6>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nihil 
             accusantium consequuntur ipsam voluptatibus facere odio nobis, aliquid
             fugiat molestias provident temporibus doloribus nam minus similique exercitationem impedit ducimus neque.</p>
          <button>Agregar</button>
        </section>
      </div>
    </div>
  )
}

export default Presentation
