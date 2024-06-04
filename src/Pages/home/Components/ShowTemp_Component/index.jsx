import React from "react"
import * as Temp from "./styled"
import temp from "../../../../Assets/temp.png";

export function ShowTemp(props){
    return(
        <Temp.Container>
            
            <Temp.Img source={temp}></Temp.Img>

            <Temp.ContainerGraus>
                <Temp.Graus>{props.temAtual}º</Temp.Graus>
                <Temp.Maxmin>Max: {props.max}º Min: {props.min}º</Temp.Maxmin>
            </Temp.ContainerGraus>

        </Temp.Container>

    )
}