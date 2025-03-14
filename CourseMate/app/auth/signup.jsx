import { Text, View, Image } from "react-native";
import Colors from "../../constants/Colors";
//import { StyleSheet } from "react-native";
export default function Signup(){
    return(
        <View style={{
            display:'flex',
            alignItems:'center',
            paddingTop: 10,
            flex: 1,
            backgroundColor:Colors.WHITE,
        }}>
            <Image source={require('../../assets/images/logo.png')}
            style={{
                width: 380,
                height: 300,
            }}
            />
            <Text style={{
                fontSize: 30,
                fontFamily: "outfit-bold",
            }}>Create New Account</Text>
        </View>
    )
}