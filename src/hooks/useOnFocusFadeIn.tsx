
import { FC, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native"
import Reanimated, { AnimatedStyleProp, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

interface IProps {
  children: JSX.Element[] | JSX.Element | null;
  style?: StyleProp<ViewStyle>;
  animatedStyle: AnimatedStyleProp<ViewStyle | ImageStyle | TextStyle>
}

const FadeIn: FC<IProps> = ({children, style, animatedStyle}) => {
  return (
    <Reanimated.View style={[animatedStyle, style]}>
      {children}
    </Reanimated.View>
  )
}


export const useOnFocusFadeIn = () => {
  const opacity = useSharedValue(0);

  useFocusEffect(useCallback(() => {
    opacity.value = withTiming(1);
    return () => {
      opacity.value = withTiming(0);
    }
  }, []));

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return {
    animatedStyle,
    FadeIn
  };
}