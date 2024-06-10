import React from "react"
import * as Temp from "./styled"
import temp from "../../../../Assets/temp.png";

export function ShowTemp(props){
    return(
        <Temp.Container>
            
            <Temp.Img source={temp}></Temp.Img>


        </Temp.Container>

    )
}