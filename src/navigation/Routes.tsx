import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '@screens/homeScreen/Home';
import {NavigationContainer} from '@react-navigation/native';
import {Details} from '@screens/InformacionScreen/Details';
import {Formulario} from 'screens/formulario/Formulario';
import {Welcome} from 'screens/welcome/Welcome';

const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Info" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
