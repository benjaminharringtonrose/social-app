import React, {FC} from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens';

const navigatorScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

export type AuthStackParamList = {
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: FC = () => (
  <Stack.Navigator screenOptions={navigatorScreenOptions}>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
);