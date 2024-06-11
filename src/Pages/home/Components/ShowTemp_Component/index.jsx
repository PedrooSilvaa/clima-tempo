import React from "react"
import * as Temp from "./styled"
import temp from "../../../../Assets/temp.png";

export function ShowTemp(props){
    return(
        <Temp.Container>
            
            <Temp.Img source={temp}></Temp.Img>

            <Temp.ContainerGraus>
                <Temp.Graus>28º</Temp.Graus>
                <Temp.Maxmin>Max: 31º Min: 23º</Temp.Maxmin>
            </Temp.ContainerGraus>
        </Temp.Container>

    )
}