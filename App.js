//import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Button from "./app/components/Button";

{ /*
export default function App() {
  return <WelcomeScreen />;
}

// <WelcomeScreen />
//<Button title="Login" />

*/}


// Jae 6/17/2020
import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './app/screens/HomeScreen';
import CartScreen from './app/screens/CartScreen';
import LoginScreen from './app/screens/LoginScreen';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator initialRouteName="WelcomeScreen" tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 3,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarLabel: 'Home',}} />
      <Tab.Screen name="Cart" component={CartScreen} options={{tabBarLabel: 'Cart',}} />
      <Tab.Screen name="Login" component={LoginScreen} options={{tabBarLabel: 'Login',}} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: { backgroundColor: '#633689' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen name="TabStack" component={TabStack} options={{ title: 'Local Farms' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
