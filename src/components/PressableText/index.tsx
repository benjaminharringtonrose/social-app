import { FC } from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import { Font } from '../../constants';
import styles from './styles';

interface IProps {
  label: string;
  color: string;
  fontSize: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  bold?: boolean;
}

const PressableText: FC<IProps> = ({ label, fontSize, color, onPress, style, bold }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [
      { opacity: pressed ? 0.5 : 1.0 },
      style,
    ]}>
      <Text style={[styles.label, { color, fontSize, fontFamily: bold ? Font.family.montserratBold : Font.family.montserratRegular }]}>{label}</Text>
    </Pressable>
  )
};

export default PressableText;