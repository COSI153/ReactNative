import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import WelcomeScreen from "../../app/screens/WelcomeScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../../app/screens/HomeScreen";
import CartScreen from "../../app/screens/CartScreen";
import LoginScreen from "../../app/screens/LoginScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="WelcomeScreen"
      tabBarOptions={styles.tabStack}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarLabel: "Cart" }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ tabBarLabel: "Login" }}
      />
    </Tab.Navigator>
  );
}

export default function TopTab() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={styles.homeHeader}
      >
        <Stack.Screen
          name="TabStack"
          component={TabStack}
          options={{ title: "Local Farms" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabStack: {},
  homeHeader: {},
});

{
  /*
const styles = StyleSheet.create({
  tabStack: {

    activeTintColor: '#FFFFFF',
    inactiveTintColor: '#F8F8F8',
    style: {
      backgroundColor: "#633689",
    },
    labelStyle: {
      textAlign: "center",
    },
    indicatorStyle: {
      borderBottomColor: "#87B56A",
      borderBottomWidth: 2,
    },

  },
  homeHeader: {

    headerStyle: { backgroundColor: '#633689' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' }

  },

})
*/
}
