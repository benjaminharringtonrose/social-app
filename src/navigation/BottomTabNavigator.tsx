import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

import { BottomTabBar } from '../components';
import { Color } from '../constants';
import { BottomTabParamList, BottomTabScreens } from '../navigation/types';
import { 
  HomeScreen, 
  MessagesScreen, 
  NotificationsScreen, 
  PostScreen, 
  SettingsScreen 
} from '../screens';


const navigatorScreenOptions: BottomTabNavigationOptions = {
  headerShown: true,
  headerBackground: () => <BlurView tint="dark" intensity={50} style={StyleSheet.absoluteFill} />,
  headerTitleStyle: { color: Color.white, fontFamily: 'Montserrat-Bold' },
  headerTransparent: true,
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator: FC = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions} tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name={BottomTabScreens.HomeScreen} component={HomeScreen} options={{ title: 'Feed' }} />
      <Tab.Screen name={BottomTabScreens.MessagesScreen} component={MessagesScreen} options={{ title: 'Messages' }} />
      <Tab.Screen name={BottomTabScreens.PostScreen} component={PostScreen} options={{ title: 'Post' }} />
      <Tab.Screen name={BottomTabScreens.NotificationScreen} component={NotificationsScreen} options={{ title: 'Notifications' }} />
      <Tab.Screen name={BottomTabScreens.SettingsScreen} component={SettingsScreen} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  );
};
