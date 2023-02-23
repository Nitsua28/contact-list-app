import { useReducer } from "react";
import { Button, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { ContactFormActions, ContactFormReducer, ContactFormState } from "../reducers/contact-form-reducer";
import { ContactListActions, ContactListReducer } from "../reducers/contact-list-reducer";
import { Props } from "../types";

export default function CreatePage({navigation}:Props["create"]){
    const initialState: ContactFormState = {
        name: "",
        phone: "",
        email: ""
    }
    const [FormState, dispatchForm] = useReducer(ContactFormReducer, initialState);
    const dispatchList = useDispatch()<ContactListActions>
    function handleCreate(){
        dispatchList({type:"PUSH_CONTACT", payload: FormState});
        navigation.navigate("Main");
    }
    return(
        <View>
            <TextInput placeholder="Name" onChangeText={(Text)=>dispatchForm({type:"UPDATE_NAME", payload: Text})}/>
            <TextInput placeholder="PhoneNumber" onChangeText={(Text)=>dispatchForm({type:"UPDATE_PHONE", payload: Text})}/>
            <TextInput placeholder="Email" onChangeText={(Text)=>dispatchForm({type:"UPDATE_EMAIL", payload: Text})}/>
            <Button title="Create" onPress={handleCreate}></Button>
        </View>
    )
}