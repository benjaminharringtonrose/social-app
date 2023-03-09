
import { useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming, WithTimingConfig } from "react-native-reanimated"
import { AnimatedTransition } from "../components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AnimationType } from "./types";
import { ParamLists, Routes } from "../navigation/types";

type TNavigationProp = NativeStackNavigationProp<any, any>;

export interface IUseAnimatedTransitionConfig {
  type: AnimationType;
  config?: WithTimingConfig;
}

export const useAnimatedTransition = ({ type, config }: IUseAnimatedTransitionConfig) => {
  const navigation = useNavigation<TNavigationProp>();
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0);

  useFocusEffect(useCallback(() => {
    switch(type) {
      case AnimationType.fadeInFadeOut:
        opacity.value = withTiming(1, config);
        break;
      case AnimationType.shrinkGrow:
        opacity.value = withTiming(1, config);
        scale.value = withTiming(1, config);
        break;
    }
    return () => {
      switch(type) {
        case AnimationType.fadeInFadeOut:
          opacity.value = withTiming(0, config);
          break;
        case AnimationType.shrinkGrow:
        default:
          return;
      }
      
    }
  }, []));

  const runNavigateOnJS = (screen: Routes, params?: ParamLists) => {
    navigation.navigate(screen, params);
  };

  const navigate = (screen: Routes, params?: ParamLists) => {
    switch(type) {
      case AnimationType.shrinkGrow:
        opacity.value = withTiming(0, config);
        scale.value = withTiming(0, config, (finished) => {
          if (finished) {
            runOnJS(runNavigateOnJS)(screen, params);
          }
        });
        break;
      default:
        return;
    }

  };

  const animatedStyle = useAnimatedStyle(() => {
    switch(type) {
      case AnimationType.fadeInFadeOut:
        return {
          opacity: opacity.value,
        };
      case AnimationType.shrinkGrow:
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