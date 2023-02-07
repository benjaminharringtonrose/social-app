import React, {FC} from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, MessagesScreen, NotificationsScreen, PostScreen, SettingsScreen } from '../screens';
import { BottomTabBar } from '../components';
import { BlurView } from 'expo-blur';
import { Color } from '../constants';
import { BottomTabScreens } from '../types';

const navigatorScreenOptions: BottomTabNavigationOptions = {
  headerShown: true,
  headerBackground: () => 
    <BlurView 
      tint="dark" 
      intensity={50} 
      style={StyleSheet.absoluteFill}
    />,
  headerTitleStyle: { color: Color.white, fontFamily: 'Montserrat-Bold' },
  headerTransparent: true,
}

export type BottomTabParamList = {
  HomeScreen: undefined;
  MessagesScreen: undefined;
  PostScreen: undefined;
  NotificationsScreen: undefined;
  SettingsScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator: FC = () => (
  <Tab.Navigator screenOptions={navigatorScreenOptions} tabBar={(props) => <BottomTabBar {...props} />}>
    <Tab.Screen name={BottomTabScreens.HomeScreen} component={HomeScreen} options={{ title: 'Feed' }} />
    <Tab.Screen name={BottomTabScreens.MessagesScreen} component={MessagesScreen} options={{ title: 'Messages' }} />
    <Tab.Screen name={BottomTabScreens.PostScreen} component={PostScreen} options={{ title: 'Post' }} />
    <Tab.Screen name={BottomTabScreens.NotificationScreen} component={NotificationsScreen} options={{ title: 'Notifications' }} />
    <Tab.Screen name={BottomTabScreens.SettingsScreen} component={SettingsScreen} options={{ title: 'Settings' }} />
  </Tab.Navigator>
);