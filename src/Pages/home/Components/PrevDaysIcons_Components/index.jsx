import React from "react";
import * as Padrao from "../PrevHour_Component/styled";
import Card from "../Cards";
import termometro from "./../../../../Assets/termometro.png";
import  umidade from "./../../../../Assets/umidade.png";
import vento from "./../../../../Assets/vento.png";
import nuvem from "../../../../Assets/nuvem.png";
import indiceUV from "../../../../Assets/indiceUV.png";



export default function PrevDaysIcons(){
    return(
        <Padrao.ContainerAzul>

            <Padrao.TituloCaixa>Previsão dos próximos 5 dias</Padrao.TituloCaixa>
            <Padrao.Line/>

            <Padrao.CaixaTemps>
                <Card dia="Sens Térmica" temp="30º" img={termometro}/>
                <Card dia="Prob. Chuva" temp="20%" img={nuvem}/>
                <Card dia="Velo. Vento" temp="2km/h" img={vento}/>
                <Card dia="Umidade Ar" temp="25%" img={umidade}/>
                <Card dia="Indice UV" temp="5" img={indiceUV}/>
            </Padrao.CaixaTemps>
        </Padrao.ContainerAzul>
    )
}