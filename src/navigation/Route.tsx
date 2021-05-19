import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@screens/homeScreen/Home';
import {NavigationContainer} from '@react-navigation/native';
import {Details} from '@screens/InformacionScreen/Details';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Info" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
