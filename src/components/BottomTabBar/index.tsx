import React, { useEffect, useState } from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TouchableOpacity, InteractionManager, LayoutChangeEvent } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Reanimated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { orderBy } from 'lodash';

import { Color, Size } from '../../constants';
import { getIconName } from '../../utils';

import styles from './styles';

interface ITab {
  width: number;
  x: number;
}

const BottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const indicatorOffset = useSharedValue(0);
  const indicatorWidth = useSharedValue(Size.width / state.routeNames.length);

  const [dimensions, setDimensions] = useState<ITab[]>([]);

  const { bottom } = useSafeAreaInsets();

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(indicatorOffset.value) }],
    width: withTiming(indicatorWidth.value),
  }), [dimensions]);

  return (
    <BlurView tint={'dark'} intensity={50} style={styles.blurView}>
      <Reanimated.View style={[styles.tabIndicator, animStyle]} />
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
              indicatorOffset.value = dimensions[idx].x;
              indicatorWidth.value = dimensions[idx].width;
            });
          };

          const onLayout = (e: LayoutChangeEvent) => {
            if (dimensions.length === state.routeNames.length) {
              return;
            }
            const { width, x } = e.nativeEvent.layout;
            const sortedTabs = orderBy([...dimensions, { width, x }], 'x', 'asc');
            setDimensions(sortedTabs);
          };

          return (
            <View onLayout={onLayout} key={index} style={[styles.iconContainer,  { paddingBottom: bottom }]}>
              <TouchableOpacity testID={options.tabBarTestID} onPress={() => onPress(index)}>
                <Ionicons 
                  name={getIconName(route.name, isFocused)}
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