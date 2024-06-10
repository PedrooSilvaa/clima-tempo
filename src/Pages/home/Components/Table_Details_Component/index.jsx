import React from 'react'
import thermometer from "../../../../Assets/thermometer.png";
import wind from "../../../../Assets/wind.png";
import rain from "../../../../Assets/rain.png";
import humidity from "../../../../Assets/humidity.png";
import sun from "../../../../Assets/sun.png";
import { Border_Details, Container_Details, Container_Details_Data, Icons_Details, Text_Details, Title_Details } from './styled'

const Details = () => {
return (

    <Container_Details>
        <Title_Details>Detalhes</Title_Details>
        <Border_Details/>
        
        <Container_Details_Data>
            <Text_Details>Sensação Térmica</Text_Details>
            <Icons_Details source={thermometer}></Icons_Details>
            <Text_Details>30°</Text_Details>
        </Container_Details_Data>
        
        
        <Container_Details_Data>
            <Text_Details>Prob. Chuva</Text_Details>
            <Icons_Details source={rain}></Icons_Details>
            <Text_Details>30°</Text_Details>
        </Container_Details_Data>
        
        <Container_Details_Data>
            <Text_Details>Velo. Vento</Text_Details>
            <Icons_Details source={wind}></Icons_Details>
            <Text_Details>30°</Text_Details>
        </Container_Details_Data>
        
        <Container_Details_Data>
            <Text_Details>Umidade Ar</Text_Details>
            <Icons_Details source={humidity}></Icons_Details>
            <Text_Details>30°</Text_Details>
        </Container_Details_Data>
        
        <Container_Details_Data>
            <Text_Details>Indice Uv</Text_Details>
            <Icons_Details source={sun}></Icons_Details>
            <Text_Details>30°</Text_Details>
        </Container_Details_Data>

    </Container_Details>

)
}

export default Details