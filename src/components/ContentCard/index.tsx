import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Color, Size } from '../../constants';

import styles from './styles';

interface IProps {}

const ContentCard: FC<IProps> = () => {
  return (
    <View style={styles.rootContainer}>
      {/* TOP ROW */}
      <View style={styles.topRowContainer}>
        <View style={styles.avatarPlaceholder} />
        <View style={styles.topRowTextContainer}>
          <Text style={styles.text}>{"John Smith"}</Text>
          <Text style={styles.text}>{"30 min ago"}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name={'ellipsis-horizontal'} color={Color.white} size={20} />
        </TouchableOpacity>
      </View>
      {/* CONTENT */}
      <View style={styles.contentContainer}>
        <Text style={styles.captionText}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</Text>
        <View style={styles.imagePlaceholder} />
        <View style={styles.bottomRowContainer}>
          <TouchableOpacity>
            <Ionicons name={'heart-outline'} color={Color.grey} size={25} />
          </TouchableOpacity>
          <Text style={[styles.text, { marginLeft: Size.gutter }]}>{'38'}</Text>
          <TouchableOpacity style={{ marginLeft: Size.gutter * 2 }}>
            <Ionicons name={'chatbox-outline'} color={Color.grey} size={25} />
          </TouchableOpacity>
          <Text style={[styles.text, { marginLeft: Size.gutter }]}>{'3'}</Text>
        </View>
      </View>
    </View>
  )
};

export default ContentCard;