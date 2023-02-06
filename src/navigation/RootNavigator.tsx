import React, { FC, useEffect } from 'react';

import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from "@react-navigation/native";

import { BottomTabNavigator, BottomTabParamList } from './BottomTabNavigator';
import { AuthNavigator, AuthStackParamList } from './AuthNavigator';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRecoilValue } from 'recoil';
import { userSelector } from '../store/auth';

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
  const user = useRecoilValue(userSelector);
  
  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      {!!user ? (
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      ) : (
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  )
};