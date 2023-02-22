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
import { Easing, useAnimatedStyle, useSharedValue, withTiming, WithTimingConfig } from 'react-native-reanimated';
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
    opacRef.value = 1;
    scaleRef.value = 1;
  });

  const navigate = (screen: Screens, params?: ParamList) => {
    opacRef.value = 0;
    scaleRef.value = 0;
    setTimeout(() => {
      navigation.navigate(screen, params);
    }, 350);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacRef.value, config),
    transform: [{ scale: withTiming(scaleRef.value, config) }],
  }), [opacRef.value, scaleRef.value])



  return { navigate, NavigationTransition, animatedStyle };
};
