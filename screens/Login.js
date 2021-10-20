import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import tw from "tailwind-react-native-classnames";
import loginLogo from "../assets/droov_white.png";

const Login = () => {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }
  changeScreenOrientation();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={[styles.container]}>
      <Image
        style={{
          width: 163,
          height: 43.5,
          resizeMode: "contain",
          marginBottom: 20,
        }}
        source={loginLogo}
      />
      <Text style={styles.tablet}>TABLET</Text>
      <TextInput
        value={username}
        onChangeText={(username) => setUsername({ username })}
        placeholder={"Username"}
        placeholderTextColor="#989898"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={(password) => setPassword({ password })}
        placeholder={"Password"}
        placeholderTextColor="#989898"
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title={"Sign in"} style={styles.button} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: "#051923",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 277,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#989898",
    marginBottom: 29,
    color: "white",
    borderRadius: 4,
  },
  tablet: {
    marginBottom: 50,
    color: "#00ABF5",
  },
  button: {
    width: 154.5,
    height: 42.5,
    borderRadius: 6,
    backgroundColor: "#00ABF5",
    color: "white",
    padding: 20,
  },
});
