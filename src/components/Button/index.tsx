import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

interface IProps {
  onPress: () => void;
  label?: string;
}

const Input: FC<IProps> = ({ onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      {!!label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  )
};

export default Input;