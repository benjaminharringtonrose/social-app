
import { useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming, WithTimingConfig } from "react-native-reanimated"
import { AnimatedTransition } from "../components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type TNavigationProp = NativeStackNavigationProp<any, any>;

interface IUseAnimatedTransitionConfig {
  animationType: 'fadeInFadeOut' | 'shrinkGrow'
  config?: WithTimingConfig;
}

export const useAnimatedTransition = ({ animationType, config }: IUseAnimatedTransitionConfig) => {
  const navigation = useNavigation<TNavigationProp>();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  useFocusEffect(useCallback(() => {
    switch(animationType) {
      case 'fadeInFadeOut':
        opacity.value = withTiming(1);
      case 'shrinkGrow':
        opacity.value = withTiming(1, config);
        scale.value = withTiming(1, config);
    }
    return () => {
      switch(animationType) {
        case 'fadeInFadeOut':
          opacity.value = withTiming(0);
        case 'shrinkGrow':
        default:
          return;
      }
      
    }
  }, []));

  const runNavigateOnJS = (screen: any, params?: any) => {
    navigation.navigate(screen, params);
  };

  const navigate = (screen: any, params?: any) => {
    opacity.value = withTiming(0, config);
    scale.value = withTiming(0, config, (finished) => {
      if (finished) {
        runOnJS(runNavigateOnJS)(screen, params);
      }
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    'worklet';
    switch(animationType) {
      case 'fadeInFadeOut':
        return {
          opacity: opacity.value,
        };
      case 'shrinkGrow':
        return {
          opacity: opacity.value,
          transform: [{ scale: scale.value }],
        }
      default:
        return {};
    }
  });

  return {
    animatedStyle,
    AnimatedTransition,
    navigate,
  };
}