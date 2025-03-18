import { Text, View, Image, TextInput, TouchableOpacity, Pressable, ToastAndroid, ActivityIndicator, Platform, Alert } from "react-native";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../../config/firebaseConfig";
import { UserDetailContext } from "../../context/UserDetailContext";

export default function Signup() {
    const router = useRouter();
    const [fullname, setfullname] = useState('');   
    const [email, setemail] = useState('');   
    const [password, setpassword] = useState('');    
    const [loading, setLoading] = useState(false);
    const { setUserDetail } = useContext(UserDetailContext);

    const showToast = (message) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert("Message", message);
        }
    };

    const CreateNewAccount = () => {
        if (!email || !password || !fullname) {
            showToast("Please fill all fields");
            return;
        }
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (resp) => {
                const user = resp.user;
                console.log(user);
                await SaveUser(user);
                setLoading(false);
                router.push("../auth/signin.jsx");
            })
            .catch(e => {
                setLoading(false);
                console.log(e.message);
                let errorMessage = "An error occurred";
                if (e.code === 'auth/email-already-in-use') {
                    errorMessage = "This email is already registered";
                } else if (e.code === 'auth/invalid-email') {
                    errorMessage = "Invalid email address";
                } else if (e.code === 'auth/weak-password') {
                    errorMessage = "Password should be at least 6 characters";
                } else if (e.code === 'auth/network-request-failed') {
                    errorMessage = "Network error. Please check your internet connection";
                }
                showToast(errorMessage);
            });
    };

    const SaveUser = async (user) => {
        try {
            const data = {
                name: fullname,
                email: email,
                member: false,
                uid: user?.uid
            };
            await setDoc(doc(db, 'users', email), data);
            setUserDetail(data);
        } catch (error) {
            console.log(error);
            showToast("Error saving user data");
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Create New Account</Text>

            <TextInput 
                placeholder='Fullname'  
                onChangeText={setfullname} 
                style={styles.TextInput}
            />
            <TextInput 
                placeholder='Email' 
                onChangeText={setemail} 
                style={styles.TextInput}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput 
                placeholder='Password' 
                onChangeText={setpassword} 
                secureTextEntry={true} 
                style={styles.TextInput}
            />

            <TouchableOpacity 
                onPress={CreateNewAccount}
                disabled={loading}
                style={styles.button}>
                {!loading ? (
                    <Text style={styles.buttonText}>Create Account</Text>
                ) : (
                    <ActivityIndicator size="large" color={Colors.WHITE} />
                )}
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <Pressable onPress={() => router.push('/auth/signin')}>
                    <Text style={styles.linkText}>Sign In Here</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 10,
        flex: 1,
        padding: 25,
        backgroundColor: Colors.WHITE,
    },
    logo: {
        width: 380,
        height: 300,
    },
    title: {
        fontSize: 30,
        fontFamily: "outfit-bold",
    },
    TextInput: {
        borderWidth: 1,
        width: '100%',
        padding: 15,
        fontSize: 18,
        marginTop: 20,
        borderRadius: 10,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        width: '100%',
        borderRadius: 10,
        marginTop: 25,
    },
    buttonText: {
        fontFamily: "outfit",
        fontSize: 20,
        color: Colors.WHITE,
        textAlign: 'center',
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        marginTop: 20,
    },
    footerText: {
        fontFamily: "outfit",
    },
    linkText: {
        color: Colors.PRIMARY,
        fontFamily: "outfit-bold",
    },
});
