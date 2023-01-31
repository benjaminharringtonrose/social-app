import React, {FC} from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens';

const navigatorScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
}

export type BottomTabParamList = {
  HomeScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomTabNavigator: FC = () => (
  <Tab.Navigator screenOptions={navigatorScreenOptions}>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
  </Tab.Navigator>
);