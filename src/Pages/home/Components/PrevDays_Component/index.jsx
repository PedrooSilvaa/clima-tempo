import React from "react";
import * as Blue  from "../PrevHour_Component/styled"
import Card from "../Cards";
import temp from "../../../../Assets/temp.png"
import { Text, TouchableOpacity } from "react-native";



export default function PrevDays({onClick}){
    return(
        <ContainerLider>
            <Blue.ContainerAzul>
                <Blue.TituloCaixa>Previsão dos próximos 5 dias</Blue.TituloCaixa>
                <Blue.Line/>
                <Blue.CaixaTemps>
                    <Card dia="Segunda" temp="25º" img={temp}/>
                    <Card dia="Terça" temp="25º" img={temp}/>
                    <Card dia="Quarta" temp="25º" img={temp}/>
                    <Card dia="Quinta" temp="25º" img={temp}/>
                    <Card dia="Sexta" temp="25º" img={temp}/>
                </Blue.CaixaTemps>
            </Blue.ContainerAzul>
            <TouchableOpacity  onPress={onClick}>
                <Text style={{marginRight: 20, color: "white", fontSize: 20}}>Ver Mais</Text>
            </TouchableOpacity>
        </ContainerLider>

    )
}