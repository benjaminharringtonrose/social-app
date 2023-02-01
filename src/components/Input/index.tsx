import React, { FC, useState } from 'react';
import { View, Text, TextInput, TextInputProps, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from './styles';

const focusedColor = "green"

interface IProps {
  onChangeText: (text: string) => void;
  value: string;
  textInputProps?: TextInputProps;
  placeholder?: string;
  leadingIcon?: (isFocused: boolean) => JSX.Element;
  trailingIcon?: (isFocused: boolean) => JSX.Element;
}

const Input: FC<IProps> = ({ 
  onChangeText, 
  value, 
  leadingIcon, 
  trailingIcon, 
  textInputProps,
  placeholder
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={[styles.input, isFocused && {borderColor: focusedColor }]}>
      <Text style={{fontSize: 12, fontWeight: "500", marginLeft: 34}}>{placeholder}</Text>
      <View style={styles.row}>
        {!!leadingIcon && (
          <View style={{marginRight: 10}}>
            {leadingIcon(isFocused)}
          </View>
          )}
        <TextInput
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={value}
          {...textInputProps}
          style={{flex: 1}}
        />
        {!!trailingIcon && trailingIcon(isFocused)}
      </View>
    </View>
  )
};

export default Input;