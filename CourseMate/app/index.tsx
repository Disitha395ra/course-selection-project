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
        height: 300,
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
          marginTop: 20,
        }}>Welcome to CourseMate</Text>
        <Text style={{
          fontSize: 20,
          color: Colors.WHITE,
          textAlign: "center",
          marginTop: 20,
        }}>Explore new fields, advance your career, or start fresh—CourseMate guides you to the perfect course every step of the way!</Text>
      
        <View style={styles.button}>
          <Text style={[styles.buttonText,{color:Colors.PRIMARY}]}>Get Started</Text>
        </View>
        <View style={[styles.button, 
          {backgroundColor:Colors.PRIMARY,
            borderWidth: 1,
            borderColor: Colors.WHITE,
          }]}>
          <Text style={[styles.buttonText,{color:Colors.WHITE}]}>Already have an account</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    padding: 20,
    backgroundColor: Colors.WHITE,
    marginTop: 20,
    borderRadius: 16,
  }, 
  buttonText:{
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  }
})
