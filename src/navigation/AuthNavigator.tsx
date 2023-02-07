import React, {FC} from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { LoginScreen } from '../screens';
import SignupScreen from '../screens/SignupScreen';
import { AuthScreens } from '../types';

const navigatorScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'none',
}

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignupScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: FC = () => (
  <Stack.Navigator screenOptions={navigatorScreenOptions}>
    <Stack.Screen name={AuthScreens.LoginScreen} component={LoginScreen} />
    <Stack.Screen 
      name={AuthScreens.SignupScreen}
      component={SignupScreen} 
      options={{ gestureEnabled: false, }}
    />
  </Stack.Navigator>
);