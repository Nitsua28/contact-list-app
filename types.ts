import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ContactFormState } from "./reducers/contact-form-reducer"

// The purpose of this file is to set up and declare what our screens are going to be and what their props are:

// define the props for each screen:
export type RootStackParamList = {
    // use undefined to not take in any props
    Main: undefined,

    Create: undefined,
    // the profile screen takes in a userId which is a number
    Profile: {contactInfo: ContactFormState}
}

// Set up the types of our props:
export type Props = {
    // one sub-type for screens with no props
    main: NativeStackScreenProps<RootStackParamList, 'Main'>
    create: NativeStackScreenProps<RootStackParamList, 'Create'>
    // one sub-type for profile page with user id:
    profile: NativeStackScreenProps<RootStackParamList, 'Profile'>;

}