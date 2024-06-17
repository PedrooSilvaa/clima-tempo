import { useEffect, useState } from "react";
import * as Page from "./App_Styled.js";
import { ShowTemp } from "../ShowTemp_Component/index.jsx";
import { PrevHour } from "../PrevHour_Component/index.jsx";
import PrevDays from "../PrevDays_Component/index.jsx";
import PrevDaysIcons from "../PrevDaysIcons_Components/index.jsx";
import SearchLocation from "../Search_Component/index.jsx";
import Details from "../Table_Details_Component/index.jsx";
import Forecast from "../Table_Forecast_Component/index.jsx";
import Message from "../Table_Message_Component/index.jsx";
import { getForecastByCity, getWeather } from "../../../../helpers/request.js";
import { Text } from "react-native";

const DetailsExpand = ({ onClick, sensacao, humidity, wind}) => <Details onClick={onClick} sensacao={sensacao} wind={wind} humidity={humidity}/>;
const DetailsDefault = ({ onClick, sensacao, wind, humidity }) => <PrevDaysIcons onClick={onClick} sensacao={sensacao} wind={wind} humidity={humidity}/>;

const ForecastExpand = ({ onClick, 
dayOne, dayTwo, dayThree, dayFour, dayFive, 
tempOne, tempTwo, tempThree, tempFour, tempFive, 
tempMinOne, tempMinTwo, tempMinThree, tempMinFour, tempMinFive, 
tempMaxOne, tempMaxTwo, tempMaxThree, tempMaxFour, tempMaxFive
}) => <Forecast onClick={onClick}
dayOne={dayOne} dayTwo={dayTwo} dayThree={dayThree} dayFour={dayFour} dayFive={dayFive}
tempOne={tempOne} tempTwo={tempTwo} tempThree={tempThree} tempFour={tempFour} tempFive={tempFive}
tempMinOne={tempMinOne} tempMinTwo={tempMinTwo} tempMinThree={tempMinThree} tempMinFour={tempMinFour} tempMinFive={tempMinFive}
tempMaxOne={tempMaxOne} tempMaxTwo={tempMaxTwo} tempMaxThree={tempMaxThree} tempMaxFour={tempMaxFour} tempMaxFive={tempMaxFive}
/>;

const ForecastDefault = ({ onClick, 
dayOne, dayTwo, dayThree, dayFour, dayFive, 
tempOne, tempTwo, tempThree, tempFour, tempFive
}) => 
<PrevDays onClick={onClick} 
dayOne={dayOne} dayTwo={dayTwo} dayThree={dayThree} dayFour={dayFour} dayFive={dayFive}
tempOne={tempOne} tempTwo={tempTwo} tempThree={tempThree} tempFour={tempFour} tempFive={tempFive}
/>;
const MessageExpand = ({ onClick }) => <Message onClick={onClick} />;
const MessageDefault = () => null;

export default function Home() {
    const [detailExp, setDetailExp] = useState(false);
    const [forecastExp, setForecastExp] = useState(false);
    const [messageExp, setMessageExp] = useState(false);

    const [tempData, setTempData] = useState({});
    const [tempDataFut, setTempDataFut] = useState({});
    const [localTemp, setLocalTemp] = useState("Santo Amaro");
    const [horas] = useState([]);
    const [datas] = useState([]);
    const [temps] = useState([]);
    const [tempsMin] = useState([]);
    const [tempsMax] = useState([]);
    
    const handleClickDetail = () => setDetailExp(!detailExp);
    const handleClickForecast = () => setForecastExp(!forecastExp);
    const handleClickMessage = () => setMessageExp(!messageExp);

    useEffect(() => {
        handleSubmit(localTemp);
    }, [localTemp])

    const handleSubmit = (local) => {
        setLocalTemp(local)
        const fetchWeather = async () => {
            try {
                const data = await getWeather(localTemp);
                const dataFut = await getForecastByCity(localTemp);
                
                setTempData(data);
                setTempDataFut(dataFut);

                console.log("home:", tempData.wind);
                console.log("home:", tempDataFut.list[0].main.temp);

                let index = 0;
                while (index <= 4 && dataFut.list[index]) {
                    let dia = dataFut.list[index].dt_txt;
                    horas.push(dia.slice(11, 16));
                    index++;
                }

                index = 3;
                while (index <= 35 && dataFut.list[index]) {
                    let dia = dataFut.list[index].dt_txt;
                    let tempera = dataFut.list[index].main.temp;
                    let temperaMin = dataFut.list[index].main.temp_min;
                    let temperaMax = dataFut.list[index].main.temp_max;
                    
                    temps.push(tempera)
                    tempsMin.push(temperaMin)
                    tempsMax.push(temperaMax)
                    datas.push(dia.slice(5, 10));
                    index += 8;
                }

                console.log(temps);
                console.log(tempsMin);
                console.log(tempsMax);
                console.log(datas);
                console.log(horas[0]);

            } catch (error) {
                console.log("Erro ao executar");
            }
        };

        fetchWeather();
    };

    return (
        <Page.Fundo>
            <SearchLocation handleClickMessage={handleClickMessage} handleSubmit={handleSubmit} />
            <ShowTemp
                temperatura={tempData?.temp}
                tempMin={tempData?.temp_min}
                tempMax={tempData?.temp_max}
            />
            {messageExp ? <MessageExpand onClick={handleClickMessage} /> : <MessageDefault />}
            <PrevHour 
            dayOne={tempDataFut.list[0].main.temp}
            dayTwo={tempDataFut.list[1].main.temp}
            dayThree={tempDataFut.list[2].main.temp}
            dayFour={tempDataFut.list[3].main.temp}
            dayFive={tempDataFut.list[4].main.temp}
            dayOneHour={horas[0]}
            dayTwoHour={horas[1]}
            dayThreeHour={horas[2]}
            dayFourHour={horas[3]}
            dayFiveHour={horas[4]}
            />
            {forecastExp ? <ForecastExpand onClick={handleClickForecast} 
            dayOne={datas[0]}
            dayTwo={datas[1]}
            dayThree={datas[2]}
            dayFour={datas[3]}
            dayFive={datas[4]}

            tempOne={temps[0]}
            tempTwo={temps[1]}
            tempThree={temps[2]}
            tempFour={temps[3]}
            tempFive={temps[4]}

            tempMinOne={tempsMin[0]}
            tempMinTwo={tempsMin[1]}
            tempMinThree={tempsMin[2]}
            tempMinFour={tempsMin[3]}
            tempMinFive={tempsMin[4]}

            tempMaxOne={tempsMin[0]}
            tempMaxTwo={tempsMin[1]}
            tempMaxThree={tempsMin[2]}
            tempMaxFour={tempsMin[3]}
            tempMaxFive={tempsMin[4]}

            /> : <ForecastDefault onClick={handleClickForecast} 
            dayOne={datas[0]}
            dayTwo={datas[1]}
            dayThree={datas[2]}
            dayFour={datas[3]}
            dayFive={datas[4]}

            tempOne={temps[0]}
            tempTwo={temps[1]}
            tempThree={temps[2]}
            tempFour={temps[3]}
            tempFive={temps[4]}
            
            />}
            {detailExp ? <DetailsExpand onClick={handleClickDetail} sensacao={tempData.feels_like} wind={tempData.wind} humidity={tempData?.humidity}/> 
            : <DetailsDefault onClick={handleClickDetail} sensacao={tempData.feels_like} wind={tempData.wind} humidity={tempData?.humidity}/>}
        </Page.Fundo>
    );
}
