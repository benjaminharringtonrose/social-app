import React, { FC, useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Button, Input, RootView } from '../../components';

import styles from './styles';

const LoginScreen: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <RootView>
      <View style={styles.topHalf} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.bottomHalf}
        >
          <Input onChangeText={setEmail} value={email} textInputProps={{placeholder: 'email'}} />
          <Input onChangeText={setPassword} value={password} textInputProps={{placeholder: 'password'}} />
          <Button label={"Login"} onPress={() => {}} />
        </KeyboardAvoidingView>
    </RootView>
  );
};

export default LoginScreen;