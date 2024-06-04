import React from "react";
import * as Search from "./styled";
import local from "../../../../Assets/local.png"
import conversation from "../../../../Assets/conversation.png"

export default function SearchLocation(props){
    return(
        <Search.searchContainer>

            <Search.localContainer>
                <Search.iconLocal source={local}/>
                <Search.localizacao>{props.localizacao}</Search.localizacao>
            </Search.localContainer>

            <Search.icon source={conversation} />
        </Search.searchContainer>
    )
}