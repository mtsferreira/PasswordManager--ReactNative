import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Form } from '../screens/Form';
import { User } from '../screens/user';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (

    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        statusBarColor: 'black',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  )
}
