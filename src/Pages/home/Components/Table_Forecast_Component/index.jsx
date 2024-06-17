import React from 'react'
import temp from "../../../../Assets/temp.png";
import { Border_Forecast, Container_Forecast, Image_Data, Line_data, Local_Day, Text_Data_Forecast, Text_Max_Forecast, Text_Min_Forecast, Title_Forecast } from './styled';
import { Text, TouchableOpacity } from 'react-native';

const Forecast = (props) => {
  return (
    <ContainerLider>
      <Container_Forecast>
        <Title_Forecast>Previsão dos proximos 5 dias</Title_Forecast>
        <Border_Forecast/>

        <Line_data>
          <Local_Day>
            <Text_Data_Forecast>{props.dayOne}</Text_Data_Forecast>
          </Local_Day>
          <Image_Data source={temp}/>
          <Text_Min_Forecast>{props.tempMinOne}</Text_Min_Forecast>
          <Text_Max_Forecast>{props.tempMaxOne}</Text_Max_Forecast>
        </Line_data>
          <Border_Forecast/>

        <Line_data>
          <Local_Day>
            <Text_Data_Forecast>{props.dayTwo}</Text_Data_Forecast>
          </Local_Day>
          <Image_Data source={temp}/>
          <Text_Min_Forecast>{props.tempMinTwo}</Text_Min_Forecast>
          <Text_Max_Forecast>{props.tempMaxTwo}</Text_Max_Forecast>
        </Line_data>
          <Border_Forecast/>

        <Line_data>
          <Local_Day>
            <Text_Data_Forecast>{props.dayThree}</Text_Data_Forecast>
          </Local_Day>
          <Image_Data source={temp}/>
          <Text_Min_Forecast>{props.tempMinThree}</Text_Min_Forecast>
          <Text_Max_Forecast>{props.tempMaxThree}</Text_Max_Forecast>
        </Line_data>
          <Border_Forecast/>

        <Line_data>
          <Local_Day>
            <Text_Data_Forecast>{props.dayFour}</Text_Data_Forecast>
          </Local_Day>
          <Image_Data source={temp}/>
          <Text_Min_Forecast>{props.tempMinFour}</Text_Min_Forecast>
          <Text_Max_Forecast>{props.tempMaxFour}</Text_Max_Forecast>
        </Line_data>
          <Border_Forecast/>

        <Line_data>
          <Local_Day>
            <Text_Data_Forecast>{props.dayFive}</Text_Data_Forecast>
          </Local_Day>
          <Image_Data source={temp}/>
          <Text_Min_Forecast>{props.tempMinFive}</Text_Min_Forecast>
          <Text_Max_Forecast>{props.tempMaxFive}</Text_Max_Forecast>
        </Line_data>
          <Border_Forecast/>

      </Container_Forecast>
        <TouchableOpacity  onPress={props.onClick}>
          <Text style={{marginRight: 20, color: "white", fontSize: 20}}>Ver Menos</Text>
        </TouchableOpacity>
    </ContainerLider>
  )
}

export default Forecast;