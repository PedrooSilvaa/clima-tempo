import React from "react";
import * as Blue  from "../PrevHour_Component/styled"
import Card from "../Cards";
import temp from "../../../../Assets/temp.png"



export default function PrevDays(){
    return(
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
    )
}