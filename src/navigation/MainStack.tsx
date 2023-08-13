import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import FormReport from '../screens/FormReport';
import Home from '../screens/Home';

export default function MainStack() {

    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Report" component={FormReport} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
