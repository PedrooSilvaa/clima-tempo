import React from "react";
import *  as Page from "./App_Styled.js";
import * as Search from "../Search_Component/index.jsx"
import { ShowTemp } from "../ShowTemp_Component/index.jsx";


export default function Home(){
    return(
        <Page.Fundo>
            <Search.SearchLocation/>
            <ShowTemp></ShowTemp>
        </Page.Fundo>
    )
}