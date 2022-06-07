import './style.css';
import { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Sun from '../../../src/assets/01d.png';
import PartialCloudy from '../../../src/assets/02d.png';
import Cloudy from '../../../src/assets/03d.png';
import MostlyCloudy from '../../../src/assets/04d.png';
import HeavyRain from '../../../src/assets/09d.png';
import Rainy from '../../../src/assets/10d.png';
import Thunder from '../../../src/assets/11d.png';
import Snow from '../../../src/assets/13d.png';
import Fog from '../../../src/assets/50d.png';
import Termometer from '../../../src/assets/Termometer.png';
import WeeklyForecast from '../weeklyForecast';
import { Form } from 'react-bootstrap';

function CurrentWeatherInfo ({currentLocationWeather}) {
    const [showExtraInfo, updateShowExtraInfo] = useState(false);
    const [isCelsius, updateIsCelsius] = useState(true);
    const [date, updateDate] = useState('');

    // switch(currentLocationWeather?.currentLocation?.info?.current?.weather[0].icon){
    //     case ''
    // }

    // const options = { weekday: 'long'};
    // const currentDate = new Intl.DateTimeFormat('es-ES', options)

    // `https://openweathermap.org/img/wn/${currentLocationWeather?.currentLocation?.info?.current?.weather[0].icon}@2x.png`

    return (
        <main className='leaves-background__container'>
            <div className='blur__container'>
                <div className='info__container'>
                    <section className='main-weather-info__container'>
                        <section className='weather-info__box'>
                            <div className='img_background__box'>
                                <img src={PartialCloudy} alt="weather-icon"/>
                            </div>
                            <div>
                                <p className='main-temp'>{isCelsius ? `${parseInt(currentLocationWeather?.currentLocation?.info?.current?.temp)}ºC` : `${parseInt(((currentLocationWeather?.currentLocation?.info?.current?.temp)*9/5)+32)}ºF`}</p>
                                <p className='city-name'>{currentLocationWeather?.currentLocation.name}</p>
                                <div className='range-temp__container'>
                                    <img src={Termometer} alt="termometer-icon" />
                                    <span className='range-temp'>{isCelsius ? `${parseInt(currentLocationWeather?.currentLocation?.info?.daily[0]?.temp?.min)}ºC` : `${parseInt(((currentLocationWeather?.currentLocation?.info?.daily[0]?.temp?.min)*9/5)+32)}ºF`}</span>
                                    <img src={Termometer} alt="termometer-icon" />
                                    <span className='range-temp'>{isCelsius ? `${parseInt(currentLocationWeather?.currentLocation?.info?.daily[0]?.temp.max)}ºC` : `${parseInt(((currentLocationWeather?.currentLocation?.info?.daily[0]?.temp?.max)*9/5)+32)}ºF`}</span>
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
                            <p>{`Humedad ${currentLocationWeather?.currentLocation?.info?.current?.humidity}%`}</p>
                            <p>{`Indice Radiacion UVA ${currentLocationWeather?.currentLocation?.info?.current?.uvi}%`}</p>
                        </div>
                        <div className='extra-info__box'>
                            <p>{`Visibilidad ${currentLocationWeather?.currentLocation?.info?.current?.visibility} metros`}</p>
                            <p>{`Velocidad del viento ${currentLocationWeather?.currentLocation?.info?.current?.wind_speed} m/s`}</p>
                        </div>
                        <div className='extra-info__box'>
                            <p>{`Amanecer ${currentLocationWeather?.currentLocation?.info?.current?.sunrise}h`}</p>
                            <p>{`Puesta de sol ${currentLocationWeather?.currentLocation?.info?.current?.sunset}h`}</p>
                        </div>
                    </section>
                    <section className='weekly-info__container'>
                        {currentLocationWeather?.currentLocation?.info?.daily?.map((d,i) => <WeeklyForecast key={i} forecast={d} isCelsius={isCelsius}></WeeklyForecast>)}
                    </section>
                </div>
            </div>
        </main>
    )
}


export default CurrentWeatherInfo;