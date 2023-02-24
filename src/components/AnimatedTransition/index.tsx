import { FC } from "react";
import Reanimated, { AnimatedStyleProp } from "react-native-reanimated"
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

interface IProps {
  children: JSX.Element[] | JSX.Element | null;
  style?: StyleProp<ViewStyle>;
  animatedStyle: AnimatedStyleProp<ViewStyle | ImageStyle | TextStyle>;
}

const AnimatedTransition: FC<IProps> = ({ children, style, animatedStyle }) => {
  return (
    <Reanimated.View style={[animatedStyle, style]}>
      {children}
    </Reanimated.View>
  )
};

export default AnimatedTransition;