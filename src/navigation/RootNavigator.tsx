import React, { FC, useEffect } from 'react';

import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from "@react-navigation/native";

import { BottomTabNavigator, BottomTabParamList } from './BottomTabNavigator';
import { AuthNavigator, AuthStackParamList } from './AuthNavigator';
import { useAuth } from '../store';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

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
  const { auth, setUser } = useAuth();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribeFromAuthStatuChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(undefined);
      }
    });
    return unsubscribeFromAuthStatuChanged;
  }, []);
  
  return (
    <Stack.Navigator screenOptions={navigatorScreenOptions}>
      {!!auth.user ? (
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      ) : (
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  )
};