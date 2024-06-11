import styled from "styled-components/native";

export const Container_Forecast = styled.View`

    background-color: #003A8CB2;
    margin-top: 20px;
    width: 90%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;

`

export const Title_Forecast = styled.Text`
    font-size: 20px;
    font-weight: 900;
    color: white;
`

export const Border_Forecast = styled.View`
    height: 1px;
    background-color: white;
    width: 85%;
    margin: 10px 0;
`

export const Line_data = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Image_Data = styled.Image`
    width: 40px;
    height: 40px;
`

export const Local_Day = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Text_Data_Forecast = styled.Text`
    font-size: 15px;
    font-weight: 900;
    color: white;
`
export const Text_Min_Forecast = styled.Text`
    font-size: 15px;
    font-weight: 900;
    color: red;
`
export const Text_Max_Forecast = styled.Text`
    font-size: 15px;
    font-weight: 900;
    color: green;
`


