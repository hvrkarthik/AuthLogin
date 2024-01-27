import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import TwoStepAuthCheck from '../screens/TwoStepAuthCheck';
import AppPasswordGeneration from '../screens/AppPasswordGeneration';
import DashboardScreen from '../screens/DashboardScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TwoStepAuthCheck" component={TwoStepAuthCheck} />
        <Stack.Screen name="AppPasswordGeneration" component={AppPasswordGeneration} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
