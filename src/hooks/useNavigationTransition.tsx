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
  const opacRef = useSharedValue(0);
  const scaleRef = useSharedValue(0);

  const config: WithTimingConfig = {
    duration: 200,
    easing: Easing.ease,
  };

  useFocusEffect(() => {
    opacRef.value = withTiming(1, config);
    scaleRef.value = withTiming(1, config);
  });

  const navigate = (screen: Screens, params?: ParamList) => {
    opacRef.value = withTiming(0, config);
    scaleRef.value = withTiming(0, config, (finished) => {
      if (finished) {
        runOnJS(navigation.navigate)(screen, params);
      }
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacRef.value,
    transform: [{ scale: scaleRef.value }],
  }));



  return { navigate, NavigationTransition, animatedStyle };
};
