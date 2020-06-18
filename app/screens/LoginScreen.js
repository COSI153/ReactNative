{/*
import React, { Component } from "react";
import {Link, View, ImageBackground, StyleSheet, Text, TextInput} from "react-native";
import Button from "../components/Button";
import { LoginButton } from 'react-native-fbsdk';


class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
};


export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
        <FBLoginButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
});

//AppRegistry.registerComponent('YourApp', () => YourApp);

*/}





import React from "react";
import { Link, View, ImageBackground, StyleSheet, Text} from "react-native";
import Button from "../components/Button";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/img/background1.jpg")}
    >
      <Text style={styles.text}>Buy What you need from farmer directly!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Login" />
      </View>
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
