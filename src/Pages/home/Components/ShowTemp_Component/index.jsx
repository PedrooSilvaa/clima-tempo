import React from "react"
import * as Temp from "./styled"
import tempIcon from "../../../../Assets/temp.png";

export function ShowTemp({temperatura, tempMin, tempMax}){
    return(
        <Temp.Container>
            
            <Temp.Img source={tempIcon}></Temp.Img>

            <Temp.ContainerGraus>
                <Temp.Graus>{temperatura}º</Temp.Graus>
                <Temp.Maxmin>Max: {tempMax}º Min: {tempMin}º</Temp.Maxmin>
            </Temp.ContainerGraus>
        </Temp.Container>

    )
}