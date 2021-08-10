import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StarMap from './screens/StarMap'
import DailyPic from './screens/DailyPic';
import SpaceCraftsScreen from './screens/SpaceCraftsScreen';
import HomeScreen from './screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

export default class App extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}></Stack.Screen>
        <Stack.Screen name="DailyPic" component={DailyPic}></Stack.Screen>
        <Stack.Screen name="StarMap" component={StarMap}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
