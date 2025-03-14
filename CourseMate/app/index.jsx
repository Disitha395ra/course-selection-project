import { Text, View, Image , TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function Index() {

  const router=useRouter();

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
          fontFamily: "outfit-bold",
        }}>Welcome to CourseMate</Text>
        <Text style={{
          fontSize: 20,
          color: Colors.WHITE,
          textAlign: "center",
          marginTop: 25,
          fontFamily: "outfit",
        }}>Explore new fields, advance your career, or start fresh—CourseMate guides you to the perfect course every step of the way!</Text>
      
        <TouchableOpacity style={styles.button}
          onPress={()=>router.push('/auth/signup')}
        >
          <Text style={[styles.buttonText,{color:Colors.PRIMARY}]}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, 
          {backgroundColor:Colors.PRIMARY,
            borderWidth: 1,
            borderColor: Colors.WHITE,
          }]}>
          <Text style={[styles.buttonText,{color:Colors.WHITE}]}>Already have an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    padding: 20,
    backgroundColor: Colors.WHITE,
    marginTop: 30,
    borderRadius: 16,
  }, 
  buttonText:{
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "outfit",
  }
})
