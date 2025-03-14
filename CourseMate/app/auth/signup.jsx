import { Text, View, Image, TextInput, TouchableOpacity, Pressable } from "react-native";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup(){
    const router=useRouter();
    const [fullname, setfullname] = useState('');   
    const [email, setemail] = useState('');   
    const [password, setpassword] = useState('');    
    
    const CreateNewAccount=()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(async(resp)=>{
            const user=resp.user;
            console.log(user);
            await SaveUser(user)
            // save user to database
        })
        .catch(e =>{
            console.log(e.message)
        })
    }

    const SaveUser=async(user)=>{
        await setDoc(doc(db,'users',email),{
            name:fullname,
            email:email,
            member:false,
            uid:user?.uid
        })

        //Navigate to new screen
    }

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

            <TextInput placeholder='Fullname'  onChange={(value)=>setfullname(value)} style={styles.TextInput}/>
            <TextInput placeholder='Email' onChange={(value)=>setemail(value)} style={styles.TextInput}/>
            <TextInput placeholder='Password' onChange={(value)=>setpassword(value)} secureTextEntry={true} style={styles.TextInput}/>

            <TouchableOpacity 
            onPress={CreateNewAccount}
            style={{
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