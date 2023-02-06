import React, { FC } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { Color } from '../../constants';

import styles from './styles';

interface IProps {
  onPress: () => void;
  label?: string;
  loading?: boolean;
}

const Input: FC<IProps> = ({ onPress, label, loading }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      {!!label && !loading && <Text style={styles.label}>{label}</Text>}
      {loading && <ActivityIndicator style={{}} color={Color.white} />}
    </TouchableOpacity>
  )
};

export default Input;