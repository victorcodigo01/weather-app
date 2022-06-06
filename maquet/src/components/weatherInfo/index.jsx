import './style.css';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Form } from 'react-bootstrap';
import Vector from '../../../src/assets/Vector.png';
import Sun from '../../../src/assets/Sun.png';
import Termometer from '../../../src/assets/Termometer.png';

function WeatherInfo () {
    const [showExtraInfo, updateShowExtraInfo] = useState(false);

    return (
        <main className='leaves-background__container'>
            <div className='blur__container'>
                <div className='info__container'>
                    <section className='main-weather-info__container'>
                        <section className='weather-info__box'>
                            <div className='img_background__box'>
                                <img src={Sun} alt="weather-icon"/>
                            </div>
                            <div>
                                <p className='main-temp'>23 ºC</p>
                                <p className='city-name'>London</p>
                                <div className='range-temp__container'>
                                    <img src={Termometer} alt="termometer-icon" />
                                    <span className='range-temp'>28º</span>
                                    <img src={Termometer} alt="termometer-icon" />
                                    <span className='range-temp'>15º</span>
                                    <IoIosArrowDown onClick={() => updateShowExtraInfo(!showExtraInfo)} className='more-info__arrow'></IoIosArrowDown>
                                </div>
                            </div>
                            <div className='switch__container'>
                                <div className='switch-units__container'>
                                    <span>ºC</span>
                                    <span>ºF</span>
                                </div>
                                <input type="checkbox" id="switch" /><label for="switch">Toggle</label>
                            </div>
                        </section>
                        <section className='time-info__box'>
                            <p>05/06/2022</p>
                            <p>20:16</p>
                        </section>
                    </section>
                    <section className={showExtraInfo ? 'extra-weather-info__container' : 'extra-weather-info__container--hidden'}>
                        <div className='extra-info__box'>
                            <p>Humedad 70%</p>
                            <p>Indice Radiacion UVA 70%</p>
                        </div>
                        <div className='extra-info__box'>
                            <p>Visibilidad 70%</p>
                            <p>Velocidad del viento 70km/h</p>
                        </div>
                        <div className='extra-info__box'>
                            <p>Amanecer 09.00h</p>
                            <p>Puesta de sol 21:00h</p>
                        </div>
                    </section>
                    <section className='weekly-info__container'>
                        <section className='week-day'>
                            <img src={Vector} alt="week-day-weather-icon" />
                            <p>15ºC - 30ºC</p>
                            <p>LUNES</p>
                        </section>
                        <section className='week-day'>
                            <img src={Vector} alt="week-day-weather-icon" />
                            <p>15ºC - 30ºC</p>
                            <p>MARTES</p>
                        </section>
                        <section className='week-day'>
                            <img src={Vector} alt="week-day-weather-icon" />
                           <p>15ºC - 30ºC</p>
                            <p>MIERCOLES</p>
                        </section>
                        <section className='week-day'>
                            <img src={Vector} alt="week-day-weather-icon" />
                            <p>15ºC - 30ºC</p>
                            <p>JUEVES</p>
                        </section>
                        <section className='week-day'>
                            <img src={Vector} alt="week-day-weather-icon" />
                           <p>15ºC - 30ºC</p>
                            <p>VIERNES</p>
                        </section>
                        <section className='week-day'>
                            <img src={Vector} alt="week-day-weather-icon" />
                            <p>15ºC - 30ºC</p>
                            <p>SABADO</p>
                        </section>
                        <section className='week-day'>
                            <img src={Vector} alt="week-day-weather-icon" />
                           <p>15ºC - 30ºC</p>
                            <p>DOMINGO</p>
                        </section>
                    </section>
                </div>
            </div>
        </main>
    )
}


export default WeatherInfo;