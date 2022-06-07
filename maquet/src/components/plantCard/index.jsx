import './style.css'
// import epipremnum  from '/epipremnum.png'
// import sansevieria from '/sansevieria.png'
// import strelitzia  from '/strelitzia.png'
// import margarita from '/margarita.png'
// import petunia  from '/petunia.png'
// import geranio from '/geranio.png'
// import oleo from '/oleo.png'
// import ficus from '/ficus.png'
// import monstera  from '/monstera.png'
// import alove from '/alove.png'
// import echeveria from '/echeveria.png'
// import cinta from '/cinta.png'




function PlantCard({card}) {
    return (

        <>
            <div className='card-plant-front'>

                <img className='card-img' src='' alt="" />

                <section className='card-text'>
                    <p>{card.title}</p>
                </section>
            </div>

            <div className='card-plant-back'>
                <article className='back-title__container'>
                    <h1 className='back-title'>Title</h1>
                </article>

                <article className='text__container'>

                    <section className='dinamic-text'>
                        <h1 className='section-title'>Información en tiempo real</h1>
                        <p>Riego</p>
                        <p>Humedad</p>
                    </section>

                    <section className='fixed-text'>
                        <h1 className='section-title'>Carácteristicas generales</h1>
                        <p>Riego:</p>
                        <p>Humedad:</p>
                        <p>Temperatura:</p>
                        <p>+ Información</p>
                    </section>
                </article>

            </div>
        </>
    )
}

export default PlantCard