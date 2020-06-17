import React from "react";
import { Link, View, ImageBackground, StyleSheet, Text } from "react-native";
import Button from "../components/Button";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/img/background1.jpg")}
    >
      <Text style={styles.text}>Buy What you need from farmer directly!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Home" />
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

export default WelcomeScreen;
