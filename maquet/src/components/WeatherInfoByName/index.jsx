import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Sun from '../../../src/assets/01d.png';
import Termometer from '../../../src/assets/Termometer.png';
import WeeklyForecast from '../weeklyForecast';
import { Form } from 'react-bootstrap';

function WeatherInfoByName ({cityWeatherByName}) {
    const [showExtraInfo, updateShowExtraInfo] = useState(false);
    const [isCelsius, updateIsCelsius] = useState(true);
    const [date, updateDate] = useState('');

    // const currentDate = new Date().getDay();

    // const options = { weekday: 'long'};
    // const currentDate = new Date.getDay('es-ES', options);

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
                                <p className='main-temp'>{isCelsius ? `${parseInt(cityWeatherByName?.info?.current?.temp)}ºC` : `${parseInt(((cityWeatherByName?.info?.current?.temp)*9/5)+32)}ºF`}</p>
                                <p className='city-name'>{cityWeatherByName?.name}</p>
                                <div className='range-temp__container'>
                                    <img src={Termometer} alt="termometer-icon" />
                                    <span className='range-temp'>{isCelsius ? `${parseInt(cityWeatherByName?.info?.daily[0]?.temp?.min)}ºC` : `${parseInt(((cityWeatherByName?.info?.daily[0]?.temp?.min)*9/5)+32)}ºF`}</span>
                                    <img src={Termometer} alt="termometer-icon" />
                                    <span className='range-temp'>{isCelsius ? `${parseInt(cityWeatherByName?.info?.daily[0]?.temp.max)}ºC` : `${parseInt(((cityWeatherByName?.info?.daily[0]?.temp?.max)*9/5)+32)}ºF`}</span>
                                    <IoIosArrowDown onClick={() => updateShowExtraInfo(!showExtraInfo)} className='more-info__arrow'></IoIosArrowDown>
                                </div>
                            </div>
                            <div className='switch__container'>
                                <div className='switch-units__container'>
                                    <span>ºC</span>
                                    <span>ºF</span>
                                </div>
                                <Form onClick={() => updateIsCelsius(!isCelsius)}>
                                    <Form.Check 
                                        className='switch-button'
                                        type="switch"
                                        id="custom-switch"
                                    />
                                </Form>
                            </div>
                        </section>
                        <section className='time-info__box'>
                            <p>currentDate</p>
                            {/* <p>20:16</p> */}
                        </section>
                    </section>
                    <section className={showExtraInfo ? 'extra-weather-info__container' : 'extra-weather-info__container--hidden'}>
                        <div className='extra-info__box'>
                            <p>{`Humedad ${cityWeatherByName?.info?.current?.humidity}%`}</p>
                            <p>{`Indice Radiacion UVA ${cityWeatherByName?.info?.current?.uvi}%`}</p>
                        </div>
                        <div className='extra-info__box'>
                            <p>{`Visibilidad ${cityWeatherByName?.info?.current?.visibility} metros`}</p>
                            <p>{`Velocidad del viento ${cityWeatherByName?.info?.current?.wind_speed} m/s`}</p>
                        </div>
                        <div className='extra-info__box'>
                            <p>{`Amanecer ${cityWeatherByName?.info?.current?.sunrise}h`}</p>
                            <p>{`Puesta de sol ${cityWeatherByName?.info?.current?.sunset}h`}</p>
                        </div>
                    </section>
                    <section className='weekly-info__container'>
                        {cityWeatherByName?.info?.daily?.map((d,i) => <WeeklyForecast key={i} forecast={d} isCelsius={isCelsius}></WeeklyForecast>)}
                    </section>
                </div>
            </div>
        </main>
    )
}


export default WeatherInfoByName;