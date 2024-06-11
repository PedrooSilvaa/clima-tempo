import React from "react";
import * as Search from "./styled";
import local from "../../../../Assets/local.png"
import conversation from "../../../../Assets/conversation.png"
import { Text, TouchableOpacity } from "react-native";

export default function SearchLocation(props){
    return(
        <Search.searchContainer>

            <Search.localContainer>
                <Search.iconLocal source={local}/>
                <Search.localizacao>{props.localizacao}</Search.localizacao>
            </Search.localContainer>

            <TouchableOpacity  onPress={props.onClick}>
                <Text style={{marginRight: 20, color: "white", fontSize: 20}}>
                    <Search.icon source={conversation} />
                    </Text>
            </TouchableOpacity>
            
        </Search.searchContainer>
    )
}