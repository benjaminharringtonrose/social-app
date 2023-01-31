import React, { FC } from 'react';

import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from "@react-navigation/native";

import { BottomTabNavigator, BottomTabParamList } from './BottomTabNavigator';
import { AuthNavigator, AuthStackParamList } from './AuthNavigator';
import { useAuth } from '../store';

const navigatorScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

type RootStackParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  AuthNavigator: NavigatorScreenParams<AuthStackParamList>
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: FC = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      {isAuthenticated ? (
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      ) : (
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  )
};