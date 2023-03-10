import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { LoadingScreen } from '../screens';
import { authStateSelector } from '../store/auth';
import { AuthEnum } from '../types';

import { AuthNavigator } from './AuthNavigator';
import { BottomTabNavigator,  } from './BottomTabNavigator';
import { Routes, RootStackParamList } from './types';

const navigatorScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'none'
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: FC = () => {
  const state = useRecoilValue(authStateSelector);
  
  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      {state === AuthEnum.Authenticated ? (
        <Stack.Screen name={Routes.BottomTabNavigator} component={BottomTabNavigator} />
      ) : state === AuthEnum.Unauthenticated ? (
        <Stack.Screen name={Routes.AuthNavigator} component={AuthNavigator} />
      ) : (
        <Stack.Screen name={Routes.LoadingScreen} component={LoadingScreen} />
      )}
    </Stack.Navigator>
  )
};