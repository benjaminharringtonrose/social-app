import React, { ReactNode, useCallback } from 'react';
import { ParamListBase, useNavigation, useFocusEffect } from '@react-navigation/native';
import { ViewStyle } from 'react-native';
import { 
  AuthStackParamList, 
  RootStackParamList, 
  AuthScreens, 
  BottomTabScreens, 
  RootScreens 
} from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming, WithTimingConfig } from 'react-native-reanimated';
import { NavigationTransition } from '../components';

type ParamList = AuthStackParamList | RootStackParamList;
type Screens = RootScreens | BottomTabScreens | AuthScreens;

type TNavigationProp = NativeStackNavigationProp<ParamListBase, Screens>;

export const useNavigationTransition = () => {
  const navigation = useNavigation<TNavigationProp>();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  const config: WithTimingConfig = {
    duration: 200,
    easing: Easing.ease,
  };

  useFocusEffect(useCallback(() => {
    opacity.value = withTiming(1, config);
    scale.value = withTiming(1, config);
  }, []));

  const runNavigateOnJS = (screen: Screens, params?: ParamList) => {
    navigation.navigate(screen, params);
  };

  const navigate = (screen: Screens, params?: ParamList) => {
    opacity.value = withTiming(0, config);
    scale.value = withTiming(0, config, (finished) => {
      if (finished) {
        runOnJS(runNavigateOnJS)(screen, params);
      }
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));



  return { navigate, NavigationTransition, animatedStyle };
};
