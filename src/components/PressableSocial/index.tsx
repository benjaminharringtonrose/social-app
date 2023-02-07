import { FC } from 'react';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleProp, ViewStyle } from 'react-native';

interface IProps {
  name: "facebook-square" | "apple" | "google",
  size: number;
  color: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const PressableSocial: FC<IProps> = ({ name, size, color, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      { opacity: pressed ? 0.5 : 1.0 },
      style
    ]}>
      <FontAwesome
        name={name}
        size={size}
        color={color}
      />
  </Pressable>
  )
};

export default PressableSocial;