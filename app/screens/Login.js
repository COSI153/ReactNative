import React, { useState } from "react";
import { StyleSheet, Text, Image } from "react-native";
import Screen from "../components/Screen";
import Button from "../components/Button";
import AppTextInput from "../components/AppTextInput";
import TopTab from "../components/Tab";
import SignUp from "../screens/SignUp";

function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Text style={styles.text}> Farm Cart </Text>
      <Image style={styles.logo} source={require("../assets/img/icon.jpg")} />

      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />

      <AppTextInput
        autoCapitaliza="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        SecureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Login" />
      <Button title="Sign up" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    height: 80,
    width: 170,
    marginBottom: -30,
    marginTop: 50,
    alignSelf: "center",
    fontSize: 35,
    fontWeight: "bold",
    color: "#fc5c65",
  },
  logo: {
    height: 40,
    width: 80,
    marginBottom: 50,
    //marginTop: 0,
    alignSelf: "center",
  },
  container: {
    padding: 10,
  },
});

export default Login;
