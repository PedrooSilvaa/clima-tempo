import React from "react";
import * as Padrao from "../PrevHour_Component/styled";
import Card from "../Cards";
import termometro from "./../../../../Assets/termometro.png";
import  umidade from "./../../../../Assets/umidade.png";
import vento from "./../../../../Assets/vento.png";
import nuvem from "../../../../Assets/nuvem.png";
import { Text, TouchableOpacity, View } from "react-native";



export default function PrevDaysIcons({onClick, wind, humidity, sensacao}){
    return(
        <ContainerLider>
        <Padrao.ContainerAzul>

            <Padrao.TituloCaixa>Detalhes</Padrao.TituloCaixa>
            <Padrao.Line/>
            <Padrao.CaixaTemps>
                <Card dia="Sens Térmica" temp={`${sensacao}º`} img={termometro}/>
                <Card dia="Velo. Vento" temp={`${wind}º`} img={vento}/>
                <Card dia="Umidade Ar" temp={`${humidity}º`} img={umidade}/>
            </Padrao.CaixaTemps>
        </Padrao.ContainerAzul>
        <TouchableOpacity  onPress={onClick}>
            <Text style={{marginRight: 20, color: "white", fontSize: 20}}>Ver Mais</Text>
        </TouchableOpacity>
        </ContainerLider>
    )
}