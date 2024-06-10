import React from "react";
import *  as Page from "./App_Styled.js";
import  Search  from "../Search_Component/index.jsx"
import { ShowTemp } from "../ShowTemp_Component/index.jsx";
import { PrevHour } from "../PrevHour_Component/index.jsx";
import PrevDays from "../PrevDays_Component/index.jsx";
import PrevDaysIcons from "../PrevDaysIcons_Components/index.jsx";


export default function Home(){
    return(
        <Page.Fundo>
            <Search localizacao="São Paulo"/>
            <ShowTemp temAtual="28" max="31" min="23"/>
            <PrevHour/>
            <PrevDays/>
            <PrevDaysIcons/>
        </Page.Fundo>
    )
}