import { StatusBar } from 'expo-status-bar';
import React, { FC } from 'react';
import { SafeAreaView, StyleProp, ViewStyle } from 'react-native';
import Reanimated from 'react-native-reanimated';
import { useOnFocusFadeIn } from '../../hooks';
import styles from './styles';

interface IProps {
  children: JSX.Element[] | JSX.Element | null;
  style?: StyleProp<ViewStyle>;
}

const RootView: FC<IProps> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.root, style]}>
      <StatusBar style={'light'} />
      {children}
    </SafeAreaView>
  );
};

export default RootView;