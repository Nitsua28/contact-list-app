
export type ContactFormState = {
        name: string,
        phone: string,
        email: string
       
}

export type UpdateName = {type: "UPDATE_NAME", payload:string}
export type UpdatePhone = {type: "UPDATE_PHONE", payload: string}
export type UpdateEmail = {type: "UPDATE_EMAIL", payload: string}

export type ContactFormActions = UpdateName | UpdatePhone | UpdateEmail

export function ContactFormReducer(state: ContactFormState, action: ContactFormActions):ContactFormState{

    const nextState: ContactFormState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case "UPDATE_NAME":{
            nextState.name = action.payload;
            return nextState
        }
        case "UPDATE_PHONE":{
            nextState.phone = action.payload;
            return nextState
        }
        case "UPDATE_EMAIL":{
            nextState.email = action.payload;
            return nextState
        }
        
        
        default:{
            return nextState
        }
        
    }
}