import React, { FC, useEffect } from 'react';

import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from "@react-navigation/native";

import { BottomTabNavigator, BottomTabParamList } from './BottomTabNavigator';
import { AuthNavigator, AuthStackParamList } from './AuthNavigator';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRecoilValue } from 'recoil';
import { authStateSelector, userSelector } from '../store/auth';
import { AuthEnum, RootScreens } from '../types';
import { LoadingScreen } from '../screens';

const navigatorScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'none'
}

export type RootStackParamList = {
  BottomTabNavigator: NavigatorScreenParams<BottomTabParamList>;
  AuthNavigator: NavigatorScreenParams<AuthStackParamList>;
  LoadingScreen: undefined;
  LoginScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: FC = () => {
  const state = useRecoilValue(authStateSelector);
  
  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      {state === AuthEnum.Authenticated ? (
        <Stack.Screen name={RootScreens.BottomTabNavigator} component={BottomTabNavigator} />
      ) : state === AuthEnum.Unauthenticated ? (
        <Stack.Screen name={RootScreens.AuthNavigator} component={AuthNavigator} />
      ) : (
        <Stack.Screen name={RootScreens.LoadingScreen} component={LoadingScreen} />
      )}
    </Stack.Navigator>
  )
};