import React, { FC } from 'react';
import { Keyboard, View, Text, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface IProps {
  backgroundTitle?: string;
  children: JSX.Element[] | JSX.Element | null;
}

const AuthRootView: FC<IProps> = ({ backgroundTitle, children }) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={[styles.root, { paddingTop: top, paddingBottom: bottom }]}>
      <Pressable style={styles.root} onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.backgroundTextContainer}>
          <Text style={styles.titleText}>{backgroundTitle}</Text>
          <LottieView
            autoPlay
            style={{
              width: 250,
              height: 250,
            }}
            source={require('../../../assets/network.json')}
          />
        </View>
        {children}
      </Pressable>
    </View>
  );
};

export default AuthRootView;
