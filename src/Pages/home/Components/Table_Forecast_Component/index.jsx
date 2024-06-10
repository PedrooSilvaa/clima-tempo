import React from 'react'
import temp from "../../../../Assets/temp.png";
import { Border_Forecast, Container_Forecast, Image_Data, Line_data, Local_Day, Text_Data_Forecast, Text_Max_Forecast, Text_Min_Forecast, Title_Forecast } from './styled';

const Forecast = () => {
  return (
    <Container_Forecast>
      <Title_Forecast>Previsão dos proximos 5 dias</Title_Forecast>
      <Border_Forecast/>

      <Line_data>
        <Local_Day>
          <Text_Data_Forecast>01/06</Text_Data_Forecast>
          <Text_Data_Forecast>Sab</Text_Data_Forecast>
        </Local_Day>
        <Image_Data source={temp}/>
        <Text_Min_Forecast>18°</Text_Min_Forecast>
        <Text_Max_Forecast>30°</Text_Max_Forecast>
        <Text_Data_Forecast>00mm</Text_Data_Forecast>
      </Line_data>
        <Border_Forecast/>

      <Line_data>
        <Local_Day>
          <Text_Data_Forecast>02/06</Text_Data_Forecast>
          <Text_Data_Forecast>Sab</Text_Data_Forecast>
        </Local_Day>
        <Image_Data source={temp}/>
        <Text_Min_Forecast>18°</Text_Min_Forecast>
        <Text_Max_Forecast>30°</Text_Max_Forecast>
        <Text_Data_Forecast>00mm</Text_Data_Forecast>
      </Line_data>
        <Border_Forecast/>

      <Line_data>
        <Local_Day>
          <Text_Data_Forecast>03/06</Text_Data_Forecast>
          <Text_Data_Forecast>Sab</Text_Data_Forecast>
        </Local_Day>
        <Image_Data source={temp}/>
        <Text_Min_Forecast>18°</Text_Min_Forecast>
        <Text_Max_Forecast>30°</Text_Max_Forecast>
        <Text_Data_Forecast>00mm</Text_Data_Forecast>
      </Line_data>
        <Border_Forecast/>

      <Line_data>
        <Local_Day>
          <Text_Data_Forecast>04/06</Text_Data_Forecast>
          <Text_Data_Forecast>Sab</Text_Data_Forecast>
        </Local_Day>
        <Image_Data source={temp}/>
        <Text_Min_Forecast>18°</Text_Min_Forecast>
        <Text_Max_Forecast>30°</Text_Max_Forecast>
        <Text_Data_Forecast>00mm</Text_Data_Forecast>
      </Line_data>
        <Border_Forecast/>

      <Line_data>
        <Local_Day>
          <Text_Data_Forecast>05/06</Text_Data_Forecast>
          <Text_Data_Forecast>Sab</Text_Data_Forecast>
        </Local_Day>
        <Image_Data source={temp}/>
        <Text_Min_Forecast>18°</Text_Min_Forecast>
        <Text_Max_Forecast>30°</Text_Max_Forecast>
        <Text_Data_Forecast>00mm</Text_Data_Forecast>
      </Line_data>
        <Border_Forecast/>

    </Container_Forecast>
  )
}

export default Forecast;