import React from 'react'
import thermometer from "../../../../Assets/thermometer.png";
import windIcon from "../../../../Assets/wind.png";
import humidityIcon from "../../../../Assets/humidity.png";
import { Border_Details, Container_Details, Container_Details_Data, Icons_Details, Text_Details, Title_Details } from './styled'
import { Text, TouchableOpacity, View } from 'react-native';

const Details = ({onClick, wind, sensacao, humidity}) => {
return (

    <ContainerLider>
    <Container_Details>
        <Title_Details>Detalhes</Title_Details>
        <Border_Details/>
        
        <Container_Details_Data>
            <Text_Details>Sensação Térmica</Text_Details>
            <Icons_Details source={thermometer}></Icons_Details>
            <Text_Details>{sensacao}º</Text_Details>
        </Container_Details_Data>
        
        
        <Container_Details_Data>
            <Text_Details>Velo. Vento</Text_Details>
            <Icons_Details source={windIcon}></Icons_Details>
            <Text_Details>{wind}km/h</Text_Details>
        </Container_Details_Data>
        
        <Container_Details_Data>
            <Text_Details>Umidade Ar</Text_Details>
            <Icons_Details source={humidityIcon}></Icons_Details>
            <Text_Details>{humidity}%</Text_Details>
        </Container_Details_Data>
        

    </Container_Details>
    <TouchableOpacity  onPress={onClick}>
        <Text style={{marginRight: 20, color: "white", fontSize: 20}}>Ver Menos</Text>
    </TouchableOpacity>
    </ContainerLider>
)
}

export default Details