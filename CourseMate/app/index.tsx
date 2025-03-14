import { Text, View, Image } from "react-native";
import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";
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
        <Text style={{
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
          color: Colors.WHITE,
        }}>Welcome to CourseMate</Text>
        <Text style={{
          fontSize: 20,
          color: Colors.WHITE,
          textAlign: "center",
          marginTop: 20,
        }}>Unlock endles learning opportunities and shape your future with the perfect course. Whether you're exploring new fields, advancing your career, or starting fresh, CourseMate is here to guide you every step of the way!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    
  }
})
