
import { FC, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native"
import Reanimated, { AnimatedStyleProp, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

interface IProps {
  children: JSX.Element[] | JSX.Element | null;
  animatedStyle: AnimatedStyleProp<{ opacity: number }>
}

const FadeIn: FC<IProps> = ({children, animatedStyle}) => {
  return (
    <Reanimated.View style={animatedStyle}>
      {children}
    </Reanimated.View>
  )
}


export const useOnFocusFadeIn = () => {
  const opacity = useSharedValue(0);

  useFocusEffect(useCallback(() => {
    opacity.value = 1;
    return () => {
      opacity.value = 0;
    }
  }, []));

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(opacity.value),
  }));

  return {
    animatedStyle,
    FadeIn
  };
}