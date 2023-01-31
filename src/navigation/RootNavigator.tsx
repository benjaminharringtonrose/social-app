import React, { FC } from 'react';

import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from "@react-navigation/native";

import { BottomTabNavigator, BottomTabParamList } from './BottomTabNavigator';
import { AuthNavigator, AuthStackParamList } from './AuthNavigator';

const navigatorScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

type RootStackParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  AuthNavigator: NavigatorScreenParams<AuthStackParamList>
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const isAuthenticated = false;

export const RootNavigator: FC = () => (
  <Stack.Navigator screenOptions={navigatorScreenOptions}>
    {isAuthenticated ? (
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    ) : (
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
    )}
    
  </Stack.Navigator>
);