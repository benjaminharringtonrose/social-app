import { useFocusEffect } from "@react-navigation/native"
import { useCallback } from "react";
import { AnimatedStyleProp, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"



export const useOnFocusFadeIn = (): AnimatedStyleProp<{ opacity: number }> => {
  const opacity = useSharedValue(0);

  useFocusEffect(useCallback(() => {
    opacity.value = 1;
    return () => {
      opacity.value = 0;
    }
  }, []));

  const opacityAnimStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value),
  }));

  return opacityAnimStyle;
}