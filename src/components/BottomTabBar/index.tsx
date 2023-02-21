import React, { useEffect, useState } from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TouchableOpacity, InteractionManager } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import Reanimated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Color, Size } from '../../constants';

import styles from './styles';

const BottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const indicatorOffset = useSharedValue(0);

  const { bottom } = useSafeAreaInsets();

  const tabCount = state.routes?.length;
  const tabWidth = Size.width / tabCount;

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(indicatorOffset.value) }],
  }))

  return (
    <BlurView tint={'dark'} intensity={50} style={styles.blurView}>
      <Reanimated.View style={[styles.tabIndicator, { width: tabWidth }, animStyle]} />
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = (idx: number) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ 
                name: route.name,
                params: {},
                merge: true,
              });
            }

            InteractionManager.runAfterInteractions(() => {
              indicatorOffset.value = idx * tabWidth;
            });
          };

          const getIconName = (routeName: string) => {
            switch(routeName) {
              case 'HomeScreen':
                return isFocused ? 'home' : 'home-outline';
              case 'MessagesScreen':
                return isFocused ? 'mail' : 'mail-outline';
              case 'PostScreen':
                return isFocused ? 'add-circle' : 'add-circle-outline' ;
              case 'NotificationsScreen':
                return isFocused ? 'notifications' : 'notifications-outline';
              case 'SettingsScreen':
                return isFocused ? 'settings' : 'settings-outline';
            }
          }

          return (
            <View key={index} style={[styles.iconContainer,  { paddingBottom: bottom }]}>
              <TouchableOpacity
                testID={options.tabBarTestID}
                onPress={() => onPress(index)}
              >
                <Ionicons 
                  name={getIconName(route.name)}
                  size={25}
                  color={isFocused ? Color.teal : Color.white}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </BlurView>
  );
};

export default BottomTabBar;