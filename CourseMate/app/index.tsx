import { Text, View, Image } from "react-native";
import Colors from "../constants/Colors";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:Colors.WHITE,
      }}
    >
      <Image source={require("../assets/images/landcover.jpg")}
      style={{
        width: "100%",
        height: 350,
        marginTop:100,
      }}/>
      <View style={{
        padding:20,
        backgroundColor:Colors.PRIMARY,
        height:'100%',
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
      }}>
        <Text>Welcome to CourseMate</Text>
      </View>
    </View>
  );
}
