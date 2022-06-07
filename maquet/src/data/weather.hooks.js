
import { useEffect, useState } from "react";
import { getCurrentLocationName, getCityWeather, getCityWeatherByName } from './weather.api.js';


export const useCurrentLocation = () => {
    const [currentLocation, updateCurrentLocation] = useState({});
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(async (success, error) => {
          if (error) {
              return updateCurrentLocation(`No ha sido posible obtener tu localización`);
          } else {
              const { latitude, longitude } = success.coords;
              const currentLocationInfo = await getCityWeather(latitude, longitude);
              const cityName = await getCurrentLocationName(latitude, longitude);
              updateCurrentLocation({info: currentLocationInfo, name: cityName});
          }
      });
  },[]);
  
      return {currentLocation};
  
  };


  export const useCityWeatherByName = () => {
    const [cityWeatherByName, updateCityWeatherByName] = useState({});
  
  
      const getCoordsByName = async city => {
          const {lon, lat} = await getCityWeatherByName(city);
          const cityInfo = await getCityWeather(lat, lon);
          const cityName = await getCurrentLocationName(lat, lon);
          updateCityWeatherByName({info: cityInfo, name: cityName})
      }
  
      return {
          cityWeatherByName,
          getCityByName: getCoordsByName
      };
  }




  export const usePlantCard = () => {
      const [plantCards, updatePlantCards] = useState([]);

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
      useEffect( () => {
        updatePlantCards(arrPlants);
      },[])
     

      return [plantCards];
  }

  
// export const useCurrentLocationFarenheit = () => {
//     const [currentLocationFarenheit, updateCurrentLocationFarenheit] = useState({});
  
//     useEffect(() => {
//       navigator.geolocation.getCurrentPosition(async (success, error) => {
//           if (error) {
//               return updateCurrentLocationFarenheit(`No ha sido posible obtener tu localización`);
//           } else {
//               const { latitude, longitude } = success.coords;
//               const currentLocationInfo = await getCityWeatherFarenheit(latitude, longitude);
//               const cityName = await getCurrentLocationName(latitude, longitude);
//               updateCurrentLocationFarenheit({info: currentLocationInfo, name: cityName});
//           }
//       });
//   },[]);
  
//       return {currentLocationFarenheit};
  
//   };



//   export const useCityWeatherByNameFarenheit = () => {
//     const [cityWeatherByNameFarenheit, updateCityWeatherByNameFarenheit] = useState({});
  
  
//       const getCoordsByName = async city => {
//           const {lon, lat} = await getCityWeatherByName(city);
//           const cityInfo = await getCityWeatherFarenheit(lat, lon);
//           const cityName = await getCurrentLocationName(lat, lon);
//           updateCityWeatherByNameFarenheit({info: cityInfo, name: cityName})
//       }
  
//       return {
//           cityWeatherByNameFarenheit,
//           getCityByNameFarenheit: getCoordsByName
//       };
//   }