import React, { FC } from 'react';
import { View, Text, ImageSourcePropType, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Color } from '../../constants';
import Avatar from '../Avatar';
import styles from './styles';

interface IProps {
  source?: ImageSourcePropType;
  name: string;
  timestamp: string;
}

const MessageThreadButton: FC<IProps> = ({ source, name, timestamp }) => {
  return (
    <TouchableOpacity style={styles.root}>
      <Avatar source={source}  />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.timestamp}>{timestamp}</Text>
      </View>
      <View style={styles.icon}>
        <Ionicons name={'chevron-forward'} color={Color.gray} size={23} />
      </View>
    </TouchableOpacity>
  )
};

export default MessageThreadButton;