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
        height: 300,
      }}/>
    </View>
  );
}
