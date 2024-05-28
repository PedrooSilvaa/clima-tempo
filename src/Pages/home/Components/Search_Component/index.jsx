import React from "react";
import * as Search from "./styled";
import local from "../../../../Assets/local.png"
import conversation from "../../../../Assets/conversation.png"

export function SearchLocation(){
    return(
        <Search.searchContainer>

            <Search.localContainer>
                <Search.iconLocal source={local}></Search.iconLocal>
                <Search.localizacao>São Paulo</Search.localizacao>
            </Search.localContainer>

            <Search.icon source={conversation}></Search.icon>
        </Search.searchContainer>
    )
}