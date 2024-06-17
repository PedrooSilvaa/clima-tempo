import React, { useState } from "react";
import * as Search from "./styled";
import localIcon from "../../../../Assets/local.png"
import conversation from "../../../../Assets/conversation.png"
import { Text, TouchableOpacity } from "react-native";

export default function SearchLocation(props){

    const [local, setLocal] = useState();

    return(
        <Search.searchContainer>

            <Search.localContainer>
                <Search.iconLocal source={localIcon}/>

                <Search.localizacao 
                value={local}
                onChangeText={(text) => setLocal(text)}
                placeholder="Digite aqui..."
                ></Search.localizacao>

                <TouchableOpacity  onPress={() => props.handleSubmit(local)}>
                <Text style={{marginLeft: 10, color: "black", fontSize: 20, backgroundColor: "white", padding: 5}}>
                    Buscar
                </Text>
            </TouchableOpacity>
            </Search.localContainer>

            <TouchableOpacity  onPress={props.handleClickMessage}>
                <Text style={{marginRight: 20, color: "white", fontSize: 20}}>
                    <Search.icon source={conversation} />
                </Text>
            </TouchableOpacity>
            
        </Search.searchContainer>
    )
}