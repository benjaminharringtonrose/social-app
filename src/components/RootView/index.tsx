import React, { FC } from 'react';
import { Keyboard, TouchableWithoutFeedback, View, Text, SafeAreaView } from 'react-native';

import styles from './styles';

interface IProps {
  backgroundText?: string;
  children: JSX.Element[] | JSX.Element | null;
}

const RootView: FC<IProps> = ({backgroundText, children}) => (
  <SafeAreaView style={styles.root}>
    <TouchableWithoutFeedback style={styles.root} onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.root}>
        <View style={styles.backgroundTextContainer}>
          <Text style={styles.titleText}>{backgroundText}</Text>
        </View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  </SafeAreaView>

);

export default RootView;