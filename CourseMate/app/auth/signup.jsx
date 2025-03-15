import { Text, View, Image, TextInput, TouchableOpacity, Pressable, ToastAndroid, ActivityIndicator } from "react-native";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../../config/firebaseConfig";
import {UserDetailContext} from '../../context/UserDetailContext'
import { useContext } from "react";

export default function Signup(){
    const router=useRouter();
    const [fullname, setfullname] = useState('');   
    const [email, setemail] = useState('');   
    const [password, setpassword] = useState('');    
    const [loading, setLoading] = useState(false);
    const {userDetail, setUserDetail} = useContext(UserDetailContext);
    
    const CreateNewAccount=()=>{
        if(!email || !password || !fullname) {
            ToastAndroid.show("Please fill all fields", ToastAndroid.BOTTOM);
            return;
        }
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(async(resp)=>{
            const user=resp.user;
            console.log(user);
            await SaveUser(user);
            setLoading(false);
            router.replace('/(tabs)/home');
        })
        .catch(e =>{
            setLoading(false);
            console.log(e.message);
            let errorMessage = "An error occurred";
            if(e.code === 'auth/email-already-in-use') {
                errorMessage = "This email is already registered";
            } else if(e.code === 'auth/invalid-email') {
                errorMessage = "Invalid email address";
            } else if(e.code === 'auth/weak-password') {
                errorMessage = "Password should be at least 6 characters";
            } else if(e.code === 'auth/network-request-failed') {
                errorMessage = "Network error. Please check your internet connection";
            }
            showToast(errorMessage);
        })
    }

    const SaveUser=async(user)=>{
        try {
            const data = {
                name:fullname,
                email:email,
                member:false,
                uid:user?.uid
            }
            await setDoc(doc(db,'users',email),data)
            setUserDetail(data);
        } catch(error) {
            console.log(error);
            showToast("Error saving user data");
        }
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

            <TextInput 
                placeholder='Fullname'  
                onChangeText={(value)=>setfullname(value)} 
                style={styles.TextInput}
            />
            <TextInput 
                placeholder='Email' 
                onChangeText={(value)=>setemail(value)} 
                style={styles.TextInput}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput 
                placeholder='Password' 
                onChangeText={(value)=>setpassword(value)} 
                secureTextEntry={true} 
                style={styles.TextInput}
            />

            <TouchableOpacity 
            onPress={CreateNewAccount}
            disabled={loading}
            style={{
                backgroundColor: Colors.PRIMARY,
                padding: 15,
                width: '100%',
                borderRadius: 10,
                marginTop: 25,
            }}>
                {!loading ? (
                    <Text style={{
                        fontFamily: "outfit",
                        fontSize:20,
                        color: Colors.WHITE,
                        textAlign: 'center',
                    }}>Create Account</Text>
                ) : (
                    <ActivityIndicator size="large" color={Colors.WHITE} />
                )}
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
                            }}>Sign In Here</Text>
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