import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ToastAndroid,
  ActivityIndicator,
  Alert,
} from "react-native";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { auth, db } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { UserDetailContext } from "../../context/UserDetailContext";
import { useContext } from "react";
export default function Signin() {
  const router = useRouter();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [loading, setLoading] = useState(false);

  const onSignInClick = async () => {
    setLoading(true);

    const result = await getDoc(doc(db, "users", email));
    if (result.exists()) {
      console.log(result.data());
      setUserDetail(result.data());
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(async (resp) => {
          const user = resp.user;
          console.log(user);
          setLoading(false);
          router.replace("/(tabs)/home");
        })
        .catch((e) => {
          console.log(e.message);
          setLoading(false);
          Alert.alert("Login Failed", "Incorrect Email or Password.");
        });
    }
  };

  const getUserDetail = async () => {
    const result = await getDoc(doc(db, "users", email));
    if (result.exists()) {
      console.log(result.data());
      setUserDetail(result.data());
    } else {
      Alert.alert("Error", "User data not found.");
    }
  };

  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        paddingTop: 10,
        flex: 1,
        padding: 25,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("../../assets/images/logo.png")}
        style={{
          width: 380,
          height: 300,
        }}
      />
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-bold",
        }}
      >
        Welcome Back
      </Text>

      <TextInput
        placeholder="Email"
        onChangeText={(value) => setemail(value)}
        style={styles.TextInput}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(value) => setpassword(value)}
        style={styles.TextInput}
      />

      <TouchableOpacity
        onPress={onSignInClick}
        disabled={loading}
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 15,
          width: "100%",
          borderRadius: 10,
          marginTop: 25,
        }}
      >
        {!loading ? (
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 20,
              color: Colors.WHITE,
              textAlign: "center",
            }}
          >
            Sgin In
          </Text>
        ) : (
          <ActivityIndicator size={"large"} color={Colors.WHITE} />
        )}
      </TouchableOpacity>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
          }}
        >
          Don't have an account?
        </Text>
        <Pressable onPress={() => router.push("/auth/signup")}>
          <Text
            style={{
              color: Colors.PRIMARY,
              fontFamily: "outfit-bold",
            }}
          >
            Create New Here
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    width: "100%",
    padding: 15,
    fontSize: 18,
    marginTop: 20,
    borderRadius: 10,
  },
});
