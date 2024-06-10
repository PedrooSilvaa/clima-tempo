import React from "react";
import * as Carde from "./styled";
import temp from "../../../../Assets/temp.png"

export default function Card(props){
    return(
        <Carde.CardContainer>
            <Carde.TituloCard>{props.dia}</Carde.TituloCard>
            <Carde.ImagemCard source={props.img}></Carde.ImagemCard>
            <Carde.TempCard>{props.temp}</Carde.TempCard>
        </Carde.CardContainer>
    )
}