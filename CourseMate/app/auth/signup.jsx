import { Text, View, Image, TextInput, TouchableOpacity, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function Signup(){
    const router=useRouter();
    return(
        <View style={{
            display:'flex',
            alignItems:'center',
            paddingTop: 10,
            flex: 1,
            padding: 25,
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

            <TextInput placeholder='Fullname' style={styles.TextInput}/>
            <TextInput placeholder='Email' style={styles.TextInput}/>
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.TextInput}/>

            <TouchableOpacity style={{
                backgroundColor: Colors.PRIMARY,
                padding: 15,
                width: '100%',
                borderRadius: 10,
                marginTop: 25,
            }}>
                <Text style={{
                    fontFamily: "outfit",
                    fontSize:20,
                    color: Colors.WHITE,
                    textAlign: 'center',
                }}>Create Account</Text>
            </TouchableOpacity>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row', gap:5,
                    marginTop: 20,
                }}>
                     <Text style={{
                        fontFamily: "outfit",
                     }}>Already have an account?</Text>
                    <Pressable
                        onPress={()=>router.push('/auth/signin')}
                    >
                            <Text style={{
                                color: Colors.PRIMARY,
                                fontFamily: "outfit-bold",
                            }}>Sgin-In Here</Text>
                    </Pressable>
                </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput:{
        borderWidth: 1,
        width: '100%',
        padding: 15,
        fontSize: 18,
        marginTop: 20,
        borderRadius: 10,
    }
})