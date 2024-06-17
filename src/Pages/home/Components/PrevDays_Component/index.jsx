import React from "react";
import * as Blue  from "../PrevHour_Component/styled"
import Card from "../Cards";
import temp from "../../../../Assets/temp.png"
import { Text, TouchableOpacity } from "react-native";



export default function PrevDays(props){
    return(
        <ContainerLider>
            <Blue.ContainerAzul>
                <Blue.TituloCaixa>Previsão dos próximos 5 dias</Blue.TituloCaixa>
                <Blue.Line/>
                <Blue.CaixaTemps>
                    <Card dia={props.dayOne} temp={props.tempOne} img={temp}/>
                    <Card dia={props.dayTwo} temp={props.tempTwo} img={temp}/>
                    <Card dia={props.dayThree} temp={props.tempThree} img={temp}/>
                    <Card dia={props.dayFour} temp={props.tempFour} img={temp}/>
                    <Card dia={props.dayFive} temp={props.tempFive} img={temp}/>
                </Blue.CaixaTemps>
            </Blue.ContainerAzul>
            <TouchableOpacity  onPress={props.onClick}>
                <Text style={{marginRight: 20, color: "white", fontSize: 20}}>Ver Mais</Text>
            </TouchableOpacity>
        </ContainerLider>

    )
}