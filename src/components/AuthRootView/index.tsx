import React, { FC } from 'react';
import { 
  Keyboard, 
  TouchableWithoutFeedback, 
  View, 
  Text, 
  SafeAreaView 
} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './styles';

interface IProps {
  backgroundTitle?: string;
  children: JSX.Element[] | JSX.Element | null;
}

const AuthRootView: FC<IProps> = ({ backgroundTitle, children }) => (
  <SafeAreaView style={styles.root}>
    <TouchableWithoutFeedback style={styles.root} onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.root}>
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
      </View>
    </TouchableWithoutFeedback>
  </SafeAreaView>

);

export default AuthRootView;