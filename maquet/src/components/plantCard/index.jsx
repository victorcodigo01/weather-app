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




const arrPlants = [

    {
        title: 'Epipremnum Aureum (Poto).',
        img: '/epipremnum.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Una vez por semana.',
        temp_minC: 6,
        temp_maxC: 21,
        temp_minF: 42.8,
        temp_maxF: 69.8,
        hum_min: 60,
        hum_max: 100
    },

    {
        title: 'Sansevieria Trifasciata Laurentii (Lengua de ...',
        img: '/sansevieria.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Una vez cada quince días.',
        temp_minC: 13,
        temp_maxC: 25,
        temp_minF: 55.4,
        temp_maxF: 77,
        hum_min: 30,
        hum_max: 40
    },

    {
        title: 'Strelitzia Augusta (Ave del paraíso)',
        img: '/strelitzia.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Una vez por semana.',
        temp_minC: 13,
        temp_maxC: 28,
        temp_minF: 55.4,
        temp_maxF: 82.4,
        hum_min: 30,
        hum_max: 50
    },

    {
        title: 'Margarita Leñosa (Margarita)',
        img: '/margarita.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Cada dos o tres dias tierra siempre húmeda',
        temp_minC: 15,
        temp_maxC: 25,
        temp_minF: 59,
        temp_maxF: 77,
        hum_min: 40,
        hum_max: 65
    },

    {
        title: 'Petunia Blanca (Petunia)',
        img: '/petunia.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Cada dos o tres dias tierra siempre húmeda',
        temp_minC: 16,
        temp_maxC: 25,
        temp_minF: 60.8,
        temp_maxF: 77,
        hum_min: 60,
        hum_max: 80
    },

    {
        title: 'Geranio Pekargonium Hortorum (Geranio)',
        img: '/geranio.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Cada dos o tres dias tierra siempre húmeda',
        temp_minC: -8,
        temp_maxC: 30,
        temp_minF: 17.6,
        temp_maxF: 86,
        hum_min: 60,
        hum_max: 80
    },

    {
        title: 'Oleo Europa (Olivo)',
        img: '/oleo.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Una vez cada quince días.',
        temp_minC: -6,
        temp_maxC: 40,
        temp_minF: 21.2,
        temp_maxF: 104,
        hum_min: 30,
        hum_max: 60
    },

    {
        title: 'Ficus Elástica Robusta (Ficus)',
        img: '/ficus.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Una vez por semana.',
        temp_minC: 15,
        temp_maxC: 25,
        temp_minF: 59,
        temp_maxF: 77,
        hum_min: 40,
        hum_max: 60
    },

    {
        title: 'Monstera Deliciosa (Costilla de Adam)',
        img: '/monstera.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Una vez por semana.',
        temp_minC: 18,
        temp_maxC: 27,
        temp_minF: 64.4,
        temp_maxF: 80.6,
        hum_min: 60,
        hum_max: 100
    },

    {
        title: 'Alove ( Aloe Vera)',
        img: '/alove.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Una vez cada diez días.',
        temp_minC: 15,
        temp_maxC: 27,
        temp_minF: 59,
        temp_maxF: 80.6,
        hum_min: 65,
        hum_max: 85
    },

    {
        title: 'Echeveria Pearl of Nurenberg (Suculenta)',
        img: '/echeveria.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Una vez cada quince días.',
        temp_minC: 18,
        temp_maxC: 21,
        temp_minF: 64.4,
        temp_maxF: 69.8,
        hum_min: 80,
        hum_max: 100
    },

    {
        title: 'Cinta',
        img: '/cinta.png',
        frio: 'Riego: Reducir la frecuencia de riego.',
        favorable: 'Riego: según las caracteristicas generales.',
        calor: 'Riego: aumentar la frecuencia de riego,',
        baja: 'Humedad: No favorece el crecimiento de tu planta.',
        alta: 'Humedad: Favorece el crecimiento de tu planta.',
        riego: 'Una vez por semana.',
        temp_minC: 14,
        temp_maxC: 22,
        temp_minF: 57.2,
        temp_maxF: 71.6,
        hum_min: 40,
        hum_max: 60
    }

]


function PlantCard() {
    return (

        <>
            <div className='card-plant-front'>

                <img className='card-img' src='' alt="" />

                <section className='card-text'>
                    <p>Title</p>
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