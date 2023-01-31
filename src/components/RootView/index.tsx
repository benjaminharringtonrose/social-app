import React, { FC } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

interface IProps {
  children: JSX.Element[] | JSX.Element | null;
}

const RootView: FC<IProps> = ({children}) => (
  <SafeAreaView style={styles.root}>
    <TouchableWithoutFeedback style={styles.root} onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.root}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  </SafeAreaView>

);

export default RootView;