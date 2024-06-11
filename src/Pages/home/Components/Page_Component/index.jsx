import { useState } from "react";
import *  as Page from "./App_Styled.js";
import { ShowTemp } from "../ShowTemp_Component/index.jsx";

import { PrevHour } from "../PrevHour_Component/index.jsx";
import PrevDays from "../PrevDays_Component/index.jsx";
import PrevDaysIcons from "../PrevDaysIcons_Components/index.jsx";
import SearchLocation from "../Search_Component/index.jsx";
import Details from "../Table_Details_Component/index.jsx";
import Forecast from "../Table_Forecast_Component/index.jsx";
import { hasOnlyExpressionInitializer } from "typescript";
import Message from "../Table_Message_Component/index.jsx";

    const DetailsExpand = ({onClick}) => {
        return <Details onClick={onClick}/>;
    }
    const DetailsDefault = ({onClick}) => {
        return <PrevDaysIcons onClick={onClick}/>;
    }

    const ForecastExpand = ({onClick}) => {
        return <Forecast onClick={onClick}/>;
    }

    const ForecastDefault = ({onClick}) => {
        return <PrevDays onClick={onClick}/>;
    }

    const MessageExpand = ({onClick}) => {
        return <Message onClick={onClick}/>;
    }

    const MessageDefault = () => {
        return null;
    }


export default function Home(){
    
    const [detailExp, setDetailExp] = useState(false);
    const [forecatExp, setForecastExp] = useState(false);
    const [messageExp, setMessageExp] = useState(false);

    const handleClickDetail = () => {
        setDetailExp(!detailExp);
    };

    const handleClickForecast = () => {
        setForecastExp(!forecatExp);
    };

    const handleClickMessage = () => {
        setMessageExp(!messageExp);
    };

    return(
        <Page.Fundo>
            <SearchLocation onClick={handleClickMessage}> </SearchLocation>
            <ShowTemp></ShowTemp>
            {!messageExp ? <MessageExpand/> : <MessageDefault/>}
            <PrevHour></PrevHour>
            {!forecatExp ? <ForecastExpand onClick={handleClickForecast}/> : <ForecastDefault onClick={handleClickForecast}/>}
            {!detailExp ? <DetailsExpand onClick={handleClickDetail}/> : <DetailsDefault onClick={handleClickDetail}/>}
        </Page.Fundo>
    )
}