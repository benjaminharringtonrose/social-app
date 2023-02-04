import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { SafeAreaView, View } from 'react-native';
import styles from './styles';

interface IProps {
  children: JSX.Element[] | JSX.Element | null;
}

const RootView: FC<IProps> = ({ children }) => {
  return (
    <View style={styles.root}>
      <StatusBar style={'light'} />
      {children}
    </View>
  );
};

export default RootView;