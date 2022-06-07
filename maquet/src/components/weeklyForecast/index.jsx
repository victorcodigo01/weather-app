import './style.css';
import Vector from '../../../src/assets/Vector.png';



function WeeklyForecast ({forecast, isCelsius}) {


    return (
        <section className='weekly-info__container'>
            <section className='week-day'>
                <img src={Vector} alt="week-day-weather-icon" />
                <p>{isCelsius ? `${parseInt(forecast.temp.min)}ºC` : `${parseInt(((forecast.temp.min)*9/5)+32)}ºF`} - {isCelsius ? `${parseInt(forecast.temp.max)}ºC` : `${parseInt(((forecast.temp.max)*9/5)+32)}ºF`}</p>
                <p>LUNES</p>
            </section>
        </section>
    )
}




export default WeeklyForecast;