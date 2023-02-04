import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface IProps {
  children: JSX.Element[] | JSX.Element | null;
}

const RootView: FC<IProps> = ({ children }) => {
  return (
    <View style={styles.root}>
      {children}
    </View>
  );
};

export default RootView;