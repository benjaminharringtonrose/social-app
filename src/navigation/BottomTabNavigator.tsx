import React, {FC} from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, MessagesScreen, NotificationsScreen, PostScreen, SettingsScreen } from '../screens';
import { BottomTabBar } from '../components';
import { BlurView } from 'expo-blur';
import { Color } from '../constants';

const navigatorScreenOptions: BottomTabNavigationOptions = {
  headerShown: true,
  headerBackground: () => 
    <BlurView 
      tint="default" 
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
    <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Feed' }} />
    <Tab.Screen name="MessagesScreen" component={MessagesScreen} options={{ title: 'Messages' }} />
    <Tab.Screen name="PostScreen" component={PostScreen} options={{ title: 'Post' }} />
    <Tab.Screen name="NotificationsScreen" component={NotificationsScreen} options={{ title: 'Notifications' }} />
    <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
  </Tab.Navigator>
);