import React from "react";
import { 
  StyleProp, 
  Switch, 
  Text, 
  TextStyle, 
  TouchableOpacity, 
  View, 
  ViewStyle 
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from "./styles";
import { Color } from "../../constants";

const SettingRow = ({
  label,
  onPress,
  style,
  textStyle,
  type = 'button',
  isEnabled,
}: {
  isEnabled?: boolean;
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: 'button' | 'switch';
}) => {
  if (type === 'button') {
    return (
      <View style={[style, styles.borderBottom, { paddingBottom: 10 }]}>
        <TouchableOpacity onPress={onPress}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={[styles.label, textStyle]}>{label}</Text>
            <Ionicons name={'chevron-forward'} color={Color.gray} size={30} />
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={[style, styles.borderBottom, { paddingBottom: 10 }]}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.label, textStyle]}>{label}</Text>
          <Switch
            ios_backgroundColor={Color.gray5}
            thumbColor={Color.white}
            trackColor={{ false: Color.gray, true: Color.teal }}
            value={isEnabled}
            onValueChange={onPress}
          />
        </View>
      </View>
    );
  }
};

export default SettingRow;