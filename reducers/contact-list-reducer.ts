import { ContactFormState } from "./contact-form-reducer"

export type ContactListState = {
    list: ContactFormState[]
   
}

export type pushContact = {type: "PUSH_CONTACT", payload: ContactFormState}
export type getContactByName = {type: "GET_CONTACT_BY_NAME", payload: string }
export type sortContact = {type: "SORT_CONTACT"}


export type ContactListActions = pushContact | getContactByName | sortContact

const initialState: ContactListState ={list: [
    {
        name: "Jon Foreman",
        phone: "7777777777",
        email: "idareyoutomove34@gmail.com"
    },
    {
        name: "Marshall Mathers",
        phone: "8888888888",
        email: "momsspaghetti67@gmail.com"
    },
    {
        name: "Bruce Lee",
        phone: "9999999999",
        email: "enterthedragon87@gmail.com"
    }
]}

export function ContactListReducer(state: ContactListState = initialState, action: ContactListActions):ContactListState{

const nextState: ContactListState = JSON.parse(JSON.stringify(state));
switch(action.type){
    case "PUSH_CONTACT":{
        nextState.list.push(action.payload);
        return nextState
    }
    case "GET_CONTACT_BY_NAME":{
        
        return nextState
    }
    case "SORT_CONTACT":{
        let list = nextState.list.sort(
            function (a,b){
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                    return 0;
            })
        nextState.list = list;
        return nextState
    }
    
    
    default:{
        return nextState
    }
    
}
}