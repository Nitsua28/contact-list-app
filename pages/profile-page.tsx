import { Button, Linking, View } from "react-native";
import { Props } from "../types";

export default function ProfilePage({route}:Props["profile"]){
    const contactInfo = route.params.contactInfo;
    return(
        <View>
            <h1>{contactInfo.name}</h1>
            <Button title={`Call ${contactInfo.phone}`} onPress = {() => Linking.openURL(`tel:+${contactInfo.phone}`)}></Button>
            <Button title={`Message ${contactInfo.phone}`} onPress = {() => Linking.openURL(`sms:+${contactInfo.phone}`)}></Button>
            <Button title={`Email ${contactInfo.email}`} onPress = {() => Linking.openURL(`mailto:+${contactInfo.phone}`)}></Button>
        </View>
    )
}