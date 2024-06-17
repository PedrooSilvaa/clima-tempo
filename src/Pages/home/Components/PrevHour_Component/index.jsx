import React from "react";
import * as Hour from "./styled";
import  Card  from "../Cards";
import temp from "../../../../Assets/temp.png"


export function PrevHour(props){
    return(
        <Hour.ContainerAzul>
            
            <Hour.TituloCaixa>Previsão hora por hora</Hour.TituloCaixa>
            <Hour.Line/>

            <Hour.CaixaTemps>
                <Card dia={props.dayOneHour} temp={props.dayOne} img={temp}/>
                <Card dia={props.dayTwoHour} temp={props.dayTwo} img={temp}/>
                <Card dia={props.dayThreeHour} temp={props.dayThree} img={temp}/>
                <Card dia={props.dayFourHour} temp={props.dayFour} img={temp}/>
                <Card dia={props.dayFiveHour} temp={props.dayFive} img={temp}/>
            </Hour.CaixaTemps>
        </Hour.ContainerAzul>
    )
}