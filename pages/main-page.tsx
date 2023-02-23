import { useReducer } from "react";
import { Button, View } from "react-native";
import { useDispatch, useSelector } from "react-redux"
import { ContactListActions, ContactListReducer, ContactListState } from "../reducers/contact-list-reducer";
import { Props } from "../types";

export default function MainPage({navigation}:Props["main"]){
    const selector = useSelector((store: ContactListState) => store);
    const dispatchList = useDispatch()<ContactListActions>;
    return(
        <View>
            <Button title = "Create Contact" onPress = {() => navigation.navigate("Create")}/>
            <View>
                <h1>CONTACT LIST</h1>
                <Button title="Sort" onPress={()=>dispatchList({type:"SORT_CONTACT"})}></Button>
                {selector.list.map((item) => <Button key = {item.name} onPress={()=> navigation.navigate("Profile",
                {contactInfo:
                    {
                        name: item.name,
                        phone: item.phone,
                        email: item.email 
                    }
                })} title={`name: ${item.name} phonenumber: ${item.phone}`}/>)}
            </View>
        </View>
    )
}