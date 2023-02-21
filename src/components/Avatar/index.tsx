import React, { FC } from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import styles from './styles';

interface IProps {
  source?: ImageSourcePropType;
}

const Avatar: FC<IProps> = ({ source }) => {
  return (
    <Image style={styles.avatarPlaceholder} source={source} />
  )
};

export default Avatar;