import React, { FC } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Color, Size } from '../../constants';

import styles from './styles';
import { IContent } from '../../types';
import Avatar from '../Avatar';

const ContentCard: FC<IContent> = ({
  avatarUrl,
  name,
  timestamp,
  caption,
  content,
  likes,
  comments
}) => {
  return (
    <View style={styles.rootContainer}>
      {/* TOP ROW */}
      <View style={styles.topRowContainer}>
        <Avatar source={{ uri: avatarUrl }}  />
        <View style={styles.topRowTextContainer}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>{timestamp}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name={'ellipsis-horizontal'} color={Color.white} size={20} />
        </TouchableOpacity>
      </View>
      {/* CONTENT */}
      <View style={styles.contentContainer}>
        {!!caption && <Text style={styles.captionText}>{caption}</Text>}
        {!!content?.[0] && <Image style={styles.imagePlaceholder} source={{ uri: content?.[0] }} />}
      </View>
      {/* BOTTOM ROW */}
      <View style={styles.bottomRowContainer}>
        <TouchableOpacity>
          <Ionicons name={'heart-outline'} color={Color.grey} size={25} />
        </TouchableOpacity>
        <Text style={[styles.text, { marginLeft: Size.gutter }]}>{likes}</Text>
        <TouchableOpacity style={{ marginLeft: Size.gutter * 2 }}>
          <Ionicons name={'chatbox-outline'} color={Color.grey} size={25} />
        </TouchableOpacity>
        <Text style={[styles.text, { marginLeft: Size.gutter }]}>{comments}</Text>
      </View>
    </View>
  )
};

export default ContentCard;