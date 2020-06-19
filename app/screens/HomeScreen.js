import React from "react";
import { Link, View, ImageBackground, StyleSheet, Text } from "react-native";
import Button from "../components/Button";
import ProductList from '../components/ProductList'

function HomeScreen(props) {
  return (
    <ImageBackground style={styles.background} source={require("../assets/img/background1.jpg")}>
      <Text> {'\n'} </Text>
      <ProductList />
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    //justifyContent: "space-around",
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

export default HomeScreen;
