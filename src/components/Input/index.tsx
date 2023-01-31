import React, { FC } from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

import styles from './styles';

interface IProps {
  onChangeText: (text: string) => void;
  value: string;
  textInputProps?: TextInputProps;
}

const Input: FC<IProps> = ({ onChangeText, value, textInputProps }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        {...textInputProps}
      />
    </View>
  )
};

export default Input;