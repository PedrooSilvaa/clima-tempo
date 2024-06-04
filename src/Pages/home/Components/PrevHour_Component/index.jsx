import React from "react";
import * as Hour from "./styled";
import  Card  from "../Cards";
import temp from "../../../../Assets/temp.png"


export function PrevHour(){
    return(
        <Hour.ContainerAzul>
            
            <Hour.TituloCaixa>Previsão hora por hora</Hour.TituloCaixa>
            <Hour.Line/>

            <Hour.CaixaTemps>
                <Card dia="Agora" temp="25º" img={temp}/>
                <Card dia="12" temp="25º" img={temp}/>
                <Card dia="13" temp="25º" img={temp}/>
                <Card dia="14" temp="25º" img={temp}/>
                <Card dia="15" temp="25º" img={temp}/>
                <Card dia="16" temp="25º" img={temp}/>
            </Hour.CaixaTemps>
        </Hour.ContainerAzul>
    )
}