import React, { FC } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import styles from './styles';

interface IProps {
  children: JSX.Element[] | JSX.Element | null;
}

const RootView: FC<IProps> = ({children}) => (
  <TouchableWithoutFeedback style={styles.root} onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.root}>
      {children}
    </View>

  </TouchableWithoutFeedback>
);

export default RootView;