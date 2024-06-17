// import baseRequest from './axiosBaseUrl'; 

import baseRequest from './axiosBaseUrl'


export async function getForecastByCity(city) {
    try {
        const response = await baseRequest.get('/forecast', {
            params: {
                q: city, 
                appid: 'a1aac202a64668472fff5a3689bc4c61',
                units:'metric'
            }
        });
    
        const responseData = response.data;

        console.log(response.data)
        console.log(responseData.list[0])

        let dataObject = [];
        dataObject = responseData;
        console.log(dataObject)

        return dataObject;
        
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}


export async function getWeather(city) {
    try {
        const response = await baseRequest.get('/weather', {
            params: {
                q: city, 
                appid: 'a1aac202a64668472fff5a3689bc4c61',
                units:'metric'
            }
        });

        const responseData = response.data;

        // console.log(response.data)
        // console.log(responseData.main.temp)

        const dataObject = {
            temp: responseData.main.temp,
            feels_like: responseData.main.feels_like,
            humidity: responseData.main.humidity,
            pressure: responseData.main.pressure,
            temp_min: responseData.main.temp_min,
            temp_max: responseData.main.temp_max,
            pop: responseData.pop,
            wind: responseData.wind.speed
        };

        // console.log(dataObject)
        return dataObject;

    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        throw error;
    }
}