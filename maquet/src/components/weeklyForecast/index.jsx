import './style.css';
import Vector from '../../../src/assets/Vector.png';



function WeeklyForecast ({forecast, isCelsius}) {

     const getDay = dt => {
        const d = new Date(dt);
        const options = { weekday: 'long'};
        const f = new Intl.DateTimeFormat('es-ES', options)
        return f.format(d).toUpperCase()
    }

    return (
        <section className='weekly-info__container'>
            <section className='week-day'>
                <img src={Vector} alt="week-day-weather-icon" />
                <p>{isCelsius ? `${parseInt(forecast.temp.min)}ºC` : `${parseInt(((forecast.temp.min)*9/5)+32)}ºF`} - {isCelsius ? `${parseInt(forecast.temp.max)}ºC` : `${parseInt(((forecast.temp.max)*9/5)+32)}ºF`}</p>
                <p>{getDay(forecast.dt*1000)}</p>
            </section>
        </section>
    )
}




export default WeeklyForecast;